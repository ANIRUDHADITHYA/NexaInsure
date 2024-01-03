import "./QuotePopup.css";
import MyContractABI from './../../ABI/Nexainsure.json';
import Web3 from "web3";
import { useState } from "react";
import useCreatePolicyForms from "../../Hooks/useCreatePolicyForms";
import { useCookies } from 'react-cookie';
import axios from "axios";

const QuotePopup = (props) => {
    const [cookies] = useCookies([]);
    const [nextPopup, setNextPopup] = useState(false)
    const [txLogs, setTxLogs] = useState({
        max_claim_amount: "",
        policy_holder: "",
        policy_number: "",
        premium_expiry_date: "",
        premium_paid_amount: "",
        premium_start_date: "",
        transaction_hash: "",
        block_no: "",
        owner_user_id: "",
        gas: "",
    })



    const {user_id} = useCreatePolicyForms();
    const { model_year, ex_showroom_price } = props;
    const ethPrice = 200000;
    const date = new Date();
    let year = date.getFullYear();
    const expiry = new Date(date.getTime() + 31536000000)


    const web3 = new Web3(window.ethereum);
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
    const myContract = new web3.eth.Contract(MyContractABI, contractAddress);

    const connectToMetaMask = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error(error);
        }
    };

    function toEther(wei) {
        return (wei / 1000000000000000000)
    }

    function setTxLogsValues(logs){
        const expiryTS = logs.events.NewPolicyCreated.returnValues.premiumExpiryDate * 1000;
        const startTS = logs.events.NewPolicyCreated.returnValues.premiumStartDate * 1000;
        const premium_expiry_date = new Date(expiryTS);
        const premium_start_date = new Date(startTS);
        txLogs.max_claim_amount = logs.events.NewPolicyCreated.returnValues.maxClaimAmount;
        txLogs.policy_holder = logs.events.NewPolicyCreated.returnValues.policyHolder;
        txLogs.policy_number = logs.events.NewPolicyCreated.returnValues.policyNumber;
        txLogs.premium_paid_amount = logs.events.NewPolicyCreated.returnValues.premiumPaidAmount;
        txLogs.premium_start_date = formatDate(premium_start_date);
        txLogs.premium_expiry_date = formatDate(premium_expiry_date);
        txLogs.transaction_hash = logs.transactionHash;
        txLogs.block_no = logs.blockNumber;
        txLogs.owner_user_id = user_id;
        txLogs.gas = logs.gasUsed;

    }

    async function handleProceedToPay() {
        try {
            if (!web3.currentProvider.selectedAddress) {
                await connectToMetaMask();
            }
            const userAddress = web3.currentProvider.selectedAddress;
            const premiumInWei = web3.utils.toWei((calcPremium()[0] / ethPrice).toString(), 'ether');
            await myContract.methods.createPolicy().send({
                from: userAddress,
                value: premiumInWei,
                gas: 3000000
            }).then((logs) => {
                setTxLogsValues(logs)
                hanldePolicySubmit()
            })




        } catch (error) {
            console.log('Transaction error:', error);
        }
    }




    function calcMaxInsuredMax(age, cost) {
        if (age <= 3) {
            return cost * 0.9
        }
        else if (age > 3 && age <= 5) {
            return cost * 0.8
        }
        else if (age > 5 && age <= 8) {
            return cost * 0.7
        }
        else if (age > 8 && age <= 12) {
            return cost * 0.6
        }

        else if (age > 12 && age <= 15) {
            return cost * 0.5
        }
        else {
            return cost * 0.4;
        }
    }

    function ageAdjustment(age) {
        if (age <= 3) {
            return 3000
        } else {
            return 5000
        }
    }

    function calcPremium() {
        const age = year - model_year
        const cost = ex_showroom_price;
        const maxInsuredAmt = calcMaxInsuredMax(age, cost);
        const subPremium = (maxInsuredAmt * 0.02) + (ageAdjustment(age, cost));
        const insuranceProviderCommision = subPremium * 0.03;
        const totalPremium = subPremium + insuranceProviderCommision;
        return [totalPremium, maxInsuredAmt];
    }
    function formatDate(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const padZero = (num) => (num < 10 ? `0${num}` : num);

        return `${day} ${month}, ${year} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    }

    const hanldePolicySubmit = async () => {
            
        try {
            const headers = {
                'Authorization': cookies.jwt,
                'Content-Type': 'application/json',
            };
            await axios.post("http://localhost:3001/policy/add_policy_account", {
                ...txLogs,
            }, { headers }
            ).then((res) => {
               if(!res.errors){
                setNextPopup(true)
               }else {
                console.log(res.err)
               }
               
            }).catch((err) => {
                console.log(err.data.errors)
            })

        } catch (error) {
            console.log(error)
        }



    }





    return (
        <div className="quote-policy-section">
            <div className="quote-policy-container">
                {!nextPopup ? <>
                    <h1>Estimate Policy Summary</h1>
                    <div className="policy-attribute-container">
                        <div className="policy-summary-attributes">
                            <p>Estimate Vehicle Cost (ETH)</p>
                            <h4>{ex_showroom_price / ethPrice} ETH</h4>
                            <h6>({ex_showroom_price} Rs Aprox.)</h6>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Total Insurance Coverage (ETH)</p>
                            <h4>{calcPremium()[1] / ethPrice} ETH</h4>
                            <h6>({calcPremium()[1]} Rs Aprox.)</h6>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Sub Premium Amount (ETH)</p>
                            <h4>{calcPremium()[0] / ethPrice} ETH / Annum</h4>
                            <h6>({calcPremium()[0]} Rs Aprox.)</h6>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Insurance Valid From</p>
                            <h4>{formatDate(date)}</h4>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Insurance Valid Till</p>
                            <h4>{formatDate(expiry)}</h4>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Payment Type</p>
                            <h4>Full Annual Payment</h4>
                        </div>
                        <div className="policy-summary-attributes">
                            <p>Total Premium Payable</p>
                            <h4>{calcPremium()[0] / ethPrice} ETH </h4>
                            <h6>({calcPremium()[0]} Rs Aprox.)</h6>
                        </div>

                    </div>
                    <p className="policy-quote-note">*Note: All premium prices are subject to ETH price, and all dates and times are subject to the block creation time only.</p>
                    <button onClick={handleProceedToPay}>Proceed to Pay</button>
                </> :
                    <>
                        <h1>Policy Summary</h1>
                        <div className="policy-attribute-container">
                            <div className="policy-summary-attributes">
                                <p>Maximum Claimable Amount (ETH)</p>
                                <h4>{toEther(txLogs.max_claim_amount)} ETH</h4>
                                <h6>({toEther(txLogs.max_claim_amount) * ethPrice} Rs Aprox.)</h6>
                            </div>
                            <div className="policy-summary-attributes hex">
                                <p>Policy Holder Address</p>
                                <h4>{txLogs.policy_holder}</h4>
                            </div>
                            <div className="policy-summary-attributes hex">
                                <p>Policy Transaction Hash</p>
                                <h4>{txLogs.transaction_hash}</h4>
                            </div>
                            <div className="policy-summary-attributes">
                                <p>Policy ID</p>
                                <h4>{txLogs.policy_number}</h4>
                            </div>
                            <div className="policy-summary-attributes">
                                <p>Insurance Valid From</p>
                                <h4>{txLogs.premium_start_date}</h4>
                            </div>
                            <div className="policy-summary-attributes">
                                <p>Insurance Valid Till</p>
                                <h4>{txLogs.premium_expiry_date}</h4>
                            </div>
                            <div className="policy-summary-attributes">
                                <p>Gas Consumed</p>
                                <h4>{txLogs.gas}</h4>
                            </div>
                            <div className="policy-summary-attributes">
                                <p>Premium Paid</p>
                                <h4>{toEther(txLogs.premium_paid_amount)} ETH </h4>
                                <h6>({toEther(txLogs.premium_paid_amount) * ethPrice} Rs Aprox.)</h6>
                            </div>

                        </div>
                        <button onClick={()=>{window.location.reload()}}>Close</button>
                    </>}
            </div>
        </div>
    )
}


export default QuotePopup;