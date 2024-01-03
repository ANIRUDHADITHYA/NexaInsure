import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import QuotePopup from "../../Components/QuotePopup/QuotePopup";
import { useAccountContext } from "../../ContextAPI/AccountContext";
import useCreatePolicyForms from "../../Hooks/useCreatePolicyForms";
import "./NewPolicy.css";


const NewPolicy = () => {
    const { authUser, logout } = useAccountContext();
    const { handleProfileChange, handleProfileSubmit, quotePopup, profileValues, profileErrors, profileLoader, vehicleInfo, handleVehicleChange } = useCreatePolicyForms();
    return (
        <>
            {quotePopup && <QuotePopup model_year={vehicleInfo.year} ex_showroom_price={vehicleInfo.ex_showroom_price}/>}
            <div className="centered-form-container">
                <Navbar user={authUser} logout={logout} />
                <div className="new-policy-info-container-wrapper">
                    {/*<div className="new-policy-info-container">
                        <h2>Personal Information</h2>
                        <div className="new-policy-info-wrapper">
                            <div className="new-policy-info-group">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={profileValues.first_name}
                                    onChange={handleProfileChange}
                                    className="new-policy-input" />
                                {profileErrors.first_name ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.first_name}
                                    </p>
                                ) : ""}

                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    className="new-policy-input"
                                    onChange={handleProfileChange}
                                    value={profileValues.last_name}
                                />
                                {profileErrors.last_name ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.last_name}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="new-policy-input"
                                    onChange={handleProfileChange}
                                    value={profileValues.email}
                                />
                                {profileErrors.email ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.email}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input
                                    type="number"
                                    id="mobileNumber"
                                    name="mobile"
                                    maxLength={10}
                                    className="new-policy-input"
                                    onChange={handleProfileChange}
                                    value={profileValues.mobile}
                                />
                                {profileErrors.mobile ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.mobile}
                                    </p>
                                ) : ""}
                            </div>
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
                        </div>
                                </div>*/}

                    <div className="new-policy-info-container">
                        <h2>Vehicle Information</h2>
                        <div className="new-policy-info-wrapper">
                            <div className="new-policy-info-group">
                                <label htmlFor="registration_number">Registration Number</label>
                                <input
                                    type="text"
                                    id="registrationNumber"
                                    name="registration_number"
                                    className="new-policy-input"
                                    value={vehicleInfo.registration_number}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.registration_number ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.registration_number}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="vehicle_name">Vehicle Name</label>
                                <input
                                    type="text"
                                    id="vehicleName"
                                    name="vehicle_name"
                                    className="new-policy-input"
                                    value={vehicleInfo.vehicle_name}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.vehicle_name ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.vehicle_name}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="model">Vehicle Model</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={vehicleInfo.model}
                                    onChange={handleVehicleChange}
                                    className="new-policy-input"
                                />
                                {profileErrors.model ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.model}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="manufacturingYear">Year of Manufacturing</label>
                                <input
                                    type="number"
                                    id="manufacturingYear"
                                    name="year"
                                    className="new-policy-input"
                                    value={vehicleInfo.year}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.year ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.year}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="color">Vehicle Color</label>
                                <input
                                    type="text"
                                    id="vehicle_color"
                                    name="vehicle_color"
                                    className="new-policy-input"
                                    value={vehicleInfo.vehicle_color}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.vehicle_color ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.vehicle_color}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="chassisNumber">Chassis Number</label>
                                <input
                                    type="text"
                                    id="chassisNumber"
                                    name="chassis_number"
                                    className="new-policy-input"
                                    value={vehicleInfo.chassis_number}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.chassis_number ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.chassis_number}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="rcNumber">RC Number</label>
                                <input
                                    type="text"
                                    id="rcNumber"
                                    name="rc_number"
                                    className="new-policy-input"
                                    value={vehicleInfo.rc_number}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.rc_number ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.rc_number}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="dealerName">Dealer Name</label>
                                <input
                                    type="text"
                                    id="dealerName"
                                    name="dealer_name"
                                    className="new-policy-input"
                                    value={vehicleInfo.dealer_name}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.dealer_name ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.dealer_name}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="exShowroomPrice">Ex Showroom Price</label>
                                <input
                                    type="number"
                                    id="exShowroomPrice"
                                    name="ex_showroom_price"
                                    className="new-policy-input"
                                    value={vehicleInfo.ex_showroom_price}
                                    onChange={handleVehicleChange}
                                />
                                {profileErrors.ex_showroom_price ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.ex_showroom_price}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="vehicleState">State</label>
                                <select name="state" id="vehicleState" className="new-policy-input" value={vehicleInfo.state} onChange={handleVehicleChange}>
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
                                {profileErrors.vehicle_state ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.vehicle_state}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="vehicleCity">City</label>
                                <input
                                    type="text"
                                    id="vehicleCity"
                                    name="city"
                                    value={vehicleInfo.city}
                                    onChange={handleVehicleChange}
                                    className="new-policy-input"
                                />
                                {profileErrors.vehicle_city ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.vehicle_city}
                                    </p>
                                ) : ""}
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="vehiclePincode">Pincode</label>
                                <input
                                    type="text"
                                    id="vehiclePincode"
                                    name="pincode"
                                    value={vehicleInfo.pincode}
                                    onChange={handleVehicleChange}
                                    className="new-policy-input"
                                />
                                {profileErrors.vehicle_pincode ? (
                                    <p className="error-msg" style={{ color: "red", fontSize: "12px" }}>
                                        *{profileErrors.vehicle_pincode}
                                    </p>
                                ) : ""}
                            </div>
                        </div>
                    </div>

                    <div className="new-policy-info-container files">
                        <h2>Upload Documents</h2>
                        <div className="new-policy-info-wrapper">
                            <div className="new-policy-info-group">
                                <label htmlFor="userPhoto">Passport Size Photo (JPEG, PNG)</label>
                                <input type="file" accept=".jpg, .jpeg, .png" id="userPhoto" name="userPhoto" className="new-policy-input" />
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="drivingLicence">Driving Licence (PDF)</label>
                                <input type="file" accept=".pdf" id="drivingLicence" name="drivingLicence" className="new-policy-input" />
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="rcBook">RC Book (PDF)</label>
                                <input type="file" accept=".pdf" id="rcBook" name="rcBook" className="new-policy-input" />
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="pancard">Pan Card (PDF)</label>
                                <input type="file" accept=".pdf" id="pancard" name="pancard" className="new-policy-input" />
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="aadharCard">Aadhar Card (PDF)</label>
                                <input type="file" accept=".pdf" id="aadharCard" name="aadharCard" className="new-policy-input" />
                            </div>
                            <div className="new-policy-info-group">
                                <label htmlFor="signature">Signature (JPEG, PNG)</label>
                                <input type="file" accept=".jpg, .jpeg, .png" id="signature" name="signature" className="new-policy-input" />
                            </div>
                        </div>
                    </div>

                    <div className="create-policy-next-btn">
                        {profileLoader ? <button className="loader-btn">Loading...</button>
                        :<button className="submit-btn" onClick={handleProfileSubmit}>Proceed</button>
                        }
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default NewPolicy;