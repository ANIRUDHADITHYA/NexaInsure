const mongoose = require('mongoose');
const PolicyAccountModelSchema = new mongoose.Schema({
    owner_user_id: {
        type: String,
        required: [true, "Used ID is Required"],
    },
    max_claim_amount: {
        type: String,
        required: [true, "max_claim_amount is Required"],
    },
    policy_holder: {
        type: String,
        required: [true, "policy_holder is Required"],
    },
    policy_number: {
        type: String,
        required: [true, "policy_number is Required"],
        unique: true,
    }, 
    premium_expiry_date: {
        type: String,
        required: [true, "premium_expiry_date is Required"]
    },
    premium_paid_amount: {
        type: String,
        required: [true, "premium_paid_amount is Required"],
    },
    premium_start_date: {
        type: String,
        required: [true, "premium_start_date is Required"],
    },
    transaction_hash: {
        type: String,
        required: [true, "transaction_hash is Required"],
        unique: true,
    },
    block_no: {
        type: String,
        required: [true, "block_no is Required"],
        unique: true,
    },
    gas: {
        type: String,
        required: [true, "gas is Required"],
    },
    
});



module.exports = mongoose.model("Premium_Accounts", PolicyAccountModelSchema);