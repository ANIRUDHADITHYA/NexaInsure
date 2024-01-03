const mongoose = require('mongoose');
const ProfileModelSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, "Used ID is Required"],
        unique: true,
    },
    first_name: {
        type: String,
        required: [true, "First Name is Required"]
    },
    last_name: {
        type: String,
        required: [true, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email ID is Required"],
        unique: true,
    }, 
    mobile: {
        type: String,
        required: [true, "Mobile Number is Required"],
        unique: true,
    },
    aadhar_card_no: {
        type: String,
        required: [true, "Aadhar Card Number is Required"],
        unique: true,
    },
    dl_no: {
        type: String,
        required: [true, "Driving License Number is Required"],
        unique: true,
    },
    blood_group: {
        type: String,
        required: [true, "Blood Group is Required"],
    },
    address_line_1: {
        type: String,
        required: [true, "Address Line 1 is Required"],
    },
    address_line_2: {
        type: String,
    },
    state: {
        type: String,
        required: [true, "State is Required"],
    },
    city: {
        type: String,
        required: [true, "City is Required"],
    }, 
    pincode: {
        type: String,
        required: [true, "Pincode is Required"],
    },
    
});



module.exports = mongoose.model("Profile", ProfileModelSchema);