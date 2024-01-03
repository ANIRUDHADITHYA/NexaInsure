const UserVehicleInfo = require('../Models/VehicleModel');
const jwt = require('jsonwebtoken');

function handleErrors(err) {
    let errors = {
        rc_number: "",
        chassis_number: "",
        registration_number: "",
    }

    if (err.code === 11000 && err.keyPattern.rc_number) {
        errors.rc_number = "Vehicle with Same RC already exists, Try Renewling of Policy if expired."
    }
    if (err.code === 11000 && err.keyPattern.registration_number) {
        errors.registration_number = "Vehicle with Same Registration Number already exists, Try Renewling of Policy if expired."
    }
    if (err.code === 11000 && err.keyPattern.chassis_number) {
        errors.chassis_number = "Vehicle with Same Chassis Number already exists, Try Renewling of Policy if expired."
    }

    return errors;
}

process.on('uncaughtException', (error) => {
    console.error('Unhandled Exception:', error);
    process.exit(1); // Terminate the application
});

module.exports.saveUserVehicleInfo = async (req, res, next) => {
    try {
        const {
            owner_user_id,
            registration_number,
            vehicle_name,
            model,
            year,
            vehicle_color,
            chassis_number,
            rc_number,
            dealer_name,
            ex_showroom_price,
            state,
            city,
            pincode,
        } = req.body;

        const token = req.headers.authorization;
        jwt.verify(token, 'aa twitter clone key', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            const userVehicleInfo = new UserVehicleInfo({
                owner_user_id,
                registration_number,
                vehicle_name,
                model,
                year,
                vehicle_color,
                chassis_number,
                rc_number,
                dealer_name,
                ex_showroom_price,
                state,
                city,
                pincode,
            });

            await userVehicleInfo.save().then((res) => {
                res.status(201).json({ message: 'Vehicle Info Added successfully' });
            }).catch((error) => {
                const errors = handleErrors(error);
                res.json({ errors });
                console.log(errors)
            })


        });
    } catch (error) {
        console.log(error)
        const errors = handleErrors(error);
        res.json({ errors });
    }
};
