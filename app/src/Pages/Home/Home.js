import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import Register from "../../Components/Register/Register";
import { useCookies } from "react-cookie";
import { useAccountContext } from "../../ContextAPI/AccountContext";

const Home = () => {
    const [viewLogin, setViewLogin] = useState(false);
    const [viewRegister, setViewRegister] = useState(false);
    const {authUser, logout} = useAccountContext();
    return (
        <div className="home-section">
            <Navbar close={setViewLogin} user={authUser} logout={logout}/>
            {viewLogin &&  <Login login={setViewLogin} register={setViewRegister}/>}
            {viewRegister && <Register login={setViewLogin} register={setViewRegister}/> }
            <div className="home-container">
                <div className="home-main-container">
                    <div className="main-content-flex-wrapper">
                        <div className="main-left-container ">
                            <div className="home-main-content">
                                <h1>Nexa Car Insurance</h1>
                                <h2>World's First Blockchain based Car Insurance</h2>
                                <p>
                                    The Nexa Car Insurance System is a cutting-edge blockchain-based insurance solution designed for efficiency and user convenience. This innovative platform offers instant customized quotes, streamlines policy management, and accelerates claims processing. Featuring an intuitive interface and secure digital policy storage, it revolutionizes the insurance experience, significantly reducing paperwork while ensuring users can easily access the perfect coverage for their needs.
                                </p>
                            </div>
                            <div className="car-bg-container">
                                <img src="/Asserts/Widgets/car-widget-banner.png" alt="car-bg"></img>
                            </div>


                        </div>
                        <div class="quote-form">
                            <form class="quote-form-form">
                                <h2 class="quote-form-heading">Get you Vehicle Quote</h2>
                                <div className="quote-form-input-container">
                                    <label class="quote-form-label" for="vehicleNumber">Vehicle Number</label>
                                    <input class="quote-form-input" type="text" id="vehicleNumber" name="vehicleNumber" required />
                                </div>
                                <div className="quote-form-input-container">
                                    <label class="quote-form-label" for="yearOfManufacture">Year of Manufacture</label>
                                    <input class="quote-form-input" type="number" id="yearOfManufacture" name="yearOfManufacture" required />
                                </div>
                                <div className="quote-form-input-container">
                                    <label class="quote-form-label" for="vehicleModel">Vehicle Model</label>
                                    <input class="quote-form-input" type="text" id="vehicleModel" name="vehicleModel" required />
                                </div>
                                <div className="quote-form-input-container">
                                    <label class="quote-form-label" for="quote_email">Email ID</label>
                                    <input class="quote-form-input" type="text" id="quote_email" name="email" required />
                                </div>
                                <div className="quote-form-input-container">
                                    <label class="quote-form-label" for="phone">Phone Number</label>
                                    <input class="quote-form-input" type="tel" id="phone" name="phone" required />
                                </div>

                                <button class="quote-form-button" type="submit">Get Quote</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="why-us-container">
                    <div className="features-container">
                        <h2>Why NexaInsure.in ?</h2>
                        <div className="features-card-container">
                            <div className="features-card">
                                <i class="fa-solid fa-cubes"></i>
                                <div className="features-title">
                                    <h3>Blockchain Based</h3>
                                    <p>Purely Transparent, Secure and Paperless</p>
                                </div>
                            </div>
                            <div className="features-card">
                                <i class="fa-solid fa-hourglass-end"></i>
                                <div className="features-title">
                                    <h3>Faster as Fastest</h3>
                                    <p>Faster Claim Settlements, Approvals</p>
                                </div>
                            </div>
                            <div className="features-card">
                                <i class="fa-solid fa-eye"></i>
                                <div className="features-title">
                                    <h3>Transparent</h3>
                                    <p>Check, Track Claims, Contract Balance Transparently</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whats-bc-sec">
                        <div className="car-bg-wrapper">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/c2cffe11-ed28-4386-90eb-f8820de6a134/LxD8a7bfgU.json"
                            >
                            </Player>
                        </div>
                        <div className="whats-bc-ca">
                            <h3>What is Blockchain car insurance?</h3>
                            <p>Blockchain car insurance leverages blockchain technology to transform the traditional insurance model. It provides transparent, secure, and automated processes for policy management, claims, and payments. Smart contracts on the blockchain enable instant verification and payouts, reducing fraud and administrative costs. Customers benefit from streamlined services, while insurers gain enhanced data accuracy and risk assessment capabilities. This innovative approach ensures a more efficient, trustworthy, and cost-effective car insurance experience.</p>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-project">
                        <div className="about-content-container">

                            <div className="about-content-main">
                                <h2>Ethereum Blockchain</h2>
                                <p>The Ethereum blockchain plays a pivotal role in this insurance system by providing a secure and transparent foundation for transactions and smart contracts. Ethereum's decentralized platform facilitates policy management, claim processing, and payments. Users can seamlessly interact with the system using Ether (ETH), Ethereum's native cryptocurrency, as the payment mode. Smart contracts on Ethereum ensure trustless execution, enabling instant verification of policies and automated, tamper-proof payouts, thereby enhancing efficiency and reliability within the insurance ecosystem.</p>
                            </div>
                            <div className="about-image-wrapper">
                                <Player
                                    autoplay
                                    loop
                                    style={{ height: '300px', width: '300px' }}
                                    src="https://lottie.host/22664309-f68b-4d7c-9030-3350d3966226/LxMYREtveL.json"
                                >
                                </Player>
                            </div>
                        </div>
                        <div className="about-content-container">
                            <div className="about-image-wrapper">
                                <Player
                                    autoplay
                                    loop
                                    style={{ height: '300px', width: '300px' }}
                                    src="/Asserts/Widgets/sc.json"
                                >
                                </Player>
                            </div>
                            <div className="about-content-main">
                                <h2>Ethereum Smart Contract</h2>
                                <p>In this insurance system, smart contracts are the backbone of trust and automation. They are self-executing, tamper-proof agreements deployed on the Ethereum blockchain. Smart contracts govern various aspects of the insurance process, including policy creation, claims, and payouts. When a user purchases a policy, a smart contract is created, defining the terms and conditions. When a claim is filed and validated, these contracts automatically trigger payments, eliminating the need for intermediaries. This decentralized approach ensures transparency, security, and efficiency, benefiting both insurers and policyholders in the NexaPolicy Car Insurance System.</p>
                            </div>
                        </div>
                        <div className="about-content-container">
                            <div className="about-content-main">
                                <h2>Our Agents</h2>
                                <p>The agent in the NexaInsure Car Insurance System serves as a pivotal intermediary between car owners and the insurance system. Their responsibilities include conducting on-site damage inspections, collecting evidence, communicating with car owners, submitting accurate repair estimates, and facilitating the timely release of funds from the insurance contract. This role ensures a streamlined and efficient claims process, providing car owners with swift support and resolution in case of accidents or damage to their vehicles.</p>
                            </div>
                            <div className="about-image-wrapper">
                                <Player
                                    autoplay
                                    loop
                                    style={{ height: '300px', width: '300px' }}
                                    src="/Asserts/Widgets/agent.json"
                                >
                                </Player>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}


export default Home;