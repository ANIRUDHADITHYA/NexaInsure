const mongoose = require('mongoose');
const VehicleModelSchema = new mongoose.Schema({
    owner_user_id: {
        type: String,
        required: [true, "Used ID is Required"],
    },
    registration_number: {
        type: String,
        required: [true, "Registration Number is Required"],
        unique: true,
    },
    vehicle_name: {
        type: String,
        required: [true, "Vehicle Name is Required"]
    },
    model: {
        type: String,
        required: [true, "Model is Required"]
    }, 
    year: {
        type: String,
        required: [true, "Year is Required"]
    },
    vehicle_color: {
        type: String,
        required: [true, "Vehicle Color is Required"],
    },
    chassis_number: {
        type: String,
        required: [true, "Chassis Number is Required"],
        unique: true,
    },
    rc_number: {
        type: String,
        required: [true, "RC Number is Required"],
        unique: true,
    },
    dealer_name: {
        type: String,
        required: [true, "Dealer Name is Required"],
    },
    ex_showroom_price: {
        type: String,
        required: [true, "Ex Showroom Price is Required"],
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



module.exports = mongoose.model("Vehicle_Info", VehicleModelSchema);