import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { useAccountContext } from "../../ContextAPI/AccountContext";
import Navbar from "./../../Components/Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    const { authUser, logout } = useAccountContext();
    return (
        <div>
            <Navbar user={authUser} logout={logout} />
            <div className="main-options-container">
                <h1 className="main-title-option">Lets get Started !</h1>
                <p className="sub-main-title-option">Access all your polices and in one place</p>
                <div className="dashboard-main-options-container">

                    <div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/renewable.png" />
                        </div>
                        <div className="option-content">
                        <Link to="/profile"><h1>Profile</h1></Link>
                            <p>View/Edit your Profile</p>
                        </div>
                    </div>
                    <div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/car-insurance.png" />
                        </div>
                        <div className="option-content">
                            <Link to="/take-new-policy"><h1>Get New Policy</h1></Link>
                            <p>Get a New Policy and Insure your Vehicle in few Clicks</p>
                        </div>
                    </div>

                    {/*<div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/claim.png" />
                        </div>
                        <div className="option-content">
                            <h1>Request Claim</h1>
                            <p>Claim upto 90% of your Repair cost</p>
                        </div>
                    </div>
                    <div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/view-policy.png" />
                        </div>
                        <div className="option-content">
                            <h1>View your Polices</h1>
                            <p>View your all purchased polices.</p>
                        </div>
                    </div>
                    <div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/bank-statement.png" />
                        </div>
                        <div className="option-content">
                            <h1>View Statement</h1>
                            <p>Get your policy premium statements</p>
                        </div>
                    </div>
                    <div className="options-card">
                        <div className="option-image-wrapper">
                            <img src="/Asserts/Icons/value.png" />
                        </div>
                        <div className="option-content">
                            <h1>Get Quote</h1>
                            <p>Get a Quote for your vehicle with low premium amount</p>
                        </div>
    </div>*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Dashboard;