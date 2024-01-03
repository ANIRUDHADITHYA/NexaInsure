import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useAccountContext } from "../../ContextAPI/AccountContext";
import { useProfileContext } from "../../ContextAPI/ProfileContext";
import useProfileForms from "../../Hooks/useProfileForms";
import "./Profile.css"

const Profile = () => {
    const { authUser, logout } = useAccountContext();
    const { handleProfileChange, profileValues, profileErrors, handleProfileSubmit } = useProfileForms();
    const { userProfile } = useProfileContext();

    return (
        <div>
            <Navbar user={authUser} logout={logout} />
            <div className="new-policy-info-container-wrapper">
                <div className="new-policy-info-container">
                    <h2>Personal Information</h2>
                    <div className="new-policy-info-wrapper">
                        <div className="new-policy-info-group">
                            <label htmlFor="first_name">First Name</label>
                            <h4>{authUser.first_name}</h4>

                        </div>
                        <div className="new-policy-info-group">
                            <label htmlFor="last_name">Last Name</label>
                            <h4>{authUser.last_name}</h4>
                        </div>
                        <div className="new-policy-info-group">
                            <label htmlFor="email">Email Address</label>
                            <h4>{authUser.email}</h4>
                        </div>
                        <div className="new-policy-info-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <h4>{authUser.mobile}</h4>
                        </div>
                        {userProfile ?
                            <>
                                <div className="new-policy-info-group">
                                    <label htmlFor="aadharNo">Aadhar Card Number</label>
                                    <h4>{userProfile.aadhar_card_no}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="dlNumber">Driving License Number</label>
                                    <h4>{userProfile.dl_no}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="bloodGroup">Blood Group</label>
                                    <h4>{userProfile.blood_group}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="address_line_1">Address Line 1</label>
                                    <h4>{userProfile.address_line_1}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="address_line_2">Address Line 2</label>
                                    <h4>{userProfile.address_line_2}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="state">State</label>
                                    <h4>{userProfile.state}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="city">City</label>
                                    <h4>{userProfile.city}</h4>
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="pincode">Pincode</label>
                                    <h4>{userProfile.pincode}</h4>
                                </div>
                            </> :
                            <>

                                <div className="new-policy-info-group">
                                    <label htmlFor="aadharNo">Aadhar Card Number</label>
                                    <input
                                        type="number"
                                        id="aadharNo"
                                        maxlength="12"
                                        name="aadhar_card_no"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.aadhar_card_no}
                                    />
                                    {profileErrors.aadhar_card_no ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.aadhar_card_no}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="dlNumber">Driving License Number</label>
                                    <input
                                        type="text"
                                        id="dlNumber"
                                        name="dl_no"
                                        maxlength="16"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.dl_no}
                                    />
                                    {profileErrors.dl_no ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.dl_no}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="bloodGroup">Blood Group</label>
                                    <select id="bloodGroup" name="blood_group" value={profileValues.blood_group} className="new-policy-input" onChange={handleProfileChange}>
                                        <option value="" selected disabled>Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    {profileErrors.blood_group ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.blood_group}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="address_line_1">Address Line 1</label>
                                    <input
                                        type="text"
                                        id="address_line_1"
                                        name="address_line_1"
                                        maxlength="50"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.address_line_1}
                                    />
                                    {profileErrors.address_line_1 ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.address_line_1}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="address_line_2">Address Line 2</label>
                                    <input
                                        type="text"
                                        id="address_line_2"
                                        name="address_line_2"
                                        maxlength="50"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.address_line_2}
                                    />
                                    {profileErrors.address_line_2 ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.address_line_2}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="state">State</label>
                                    <select name="state" id="state" className="new-policy-input" onChange={handleProfileChange} value={profileValues.state}>
                                        <option value="" selected disabled>Select your State</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                    {profileErrors.state ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.state}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.city}
                                    />
                                    {profileErrors.city ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.city}
                                        </p>
                                    ) : ""}
                                </div>
                                <div className="new-policy-info-group">
                                    <label htmlFor="pincode">Pincode</label>
                                    <input
                                        type="number"
                                        id="pincode"
                                        name="pincode"
                                        maxlength="6"
                                        className="new-policy-input"
                                        onChange={handleProfileChange}
                                        value={profileValues.pincode}
                                    />
                                    {profileErrors.pincode ? (
                                        <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                            *{profileErrors.pincode}
                                        </p>
                                    ) : ""}
                                </div>
                            </>}
                    </div>
                </div>
            </div>
            <button className="submit-btn" onClick={handleProfileSubmit}>Update Profile</button>
            <Footer />
        </div>
    )
}


export default Profile;