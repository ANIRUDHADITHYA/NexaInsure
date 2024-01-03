const UserProfile = require('../Models/ProfileModel');
const jwt = require('jsonwebtoken');

function handleErrors(err) {
    let errors = {
        aadhar_card_no: "",
        dl_no: "",
    }

    
    if (err.code === 11000 && err.keyPattern.aadhar_card_no) {
        errors.aadhar_card_no = "Aadhar Card Number is already used."
    }
    if (err.code === 11000 && err.keyPattern.dl_no) {
        errors.dl_no = "Driving Lisence is already used."
    }

    return errors;
}

process.on('uncaughtException', (error) => {
    console.error('Unhandled Exception:', error);
    process.exit(1); // Terminate the application
});

module.exports.saveUserProfile = async (req, res, next) => {
    try {
        const {
            user_id,
            first_name,
            last_name,
            email,
            mobile,
            aadhar_card_no,
            dl_no,
            blood_group,
            address_line_1,
            address_line_2,
            state,
            city,
            pincode
        } = req.body;

        const token = req.headers.authorization;
        jwt.verify(token, 'aa twitter clone key',
            async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }

                const userProfile = new UserProfile({
                    user_id,
                    first_name,
                    last_name,
                    email,
                    mobile,
                    aadhar_card_no,
                    dl_no,
                    blood_group,
                    address_line_1,
                    address_line_2,
                    state,
                    city,
                    pincode
                });

                await userProfile.save().then((res) => {
                    res.status(201).json({ message: 'Profile Added successfully' });
                }).catch((error) => {
                    const errors = handleErrors(error);
                    res.json({ errors });
                    console.log(errors)
                })
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving your Profile' });
    }
};