const PolicyAccountModel = require('../Models/PolicyAccountModel');
const jwt = require('jsonwebtoken');

process.on('uncaughtException', (error) => {
    console.error('Unhandled Exception:', error);
    process.exit(1); // Terminate the application
});

module.exports.saveUserPolicyAccount = async (req, res, next) => {
    try {
        const {
            owner_user_id,
            max_claim_amount,
            policy_holder,
            policy_number,
            premium_expiry_date,
            premium_paid_amount,
            premium_start_date,
            transaction_hash,
            block_no,
            gas,
        } = req.body;

        const token = req.headers.authorization;
        jwt.verify(token, 'aa twitter clone key', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            const userPolicyAccount = new PolicyAccountModel({
                owner_user_id,
                max_claim_amount,
                policy_holder,
                policy_number,
                premium_expiry_date,
                premium_paid_amount,
                premium_start_date,
                transaction_hash,
                block_no,
                gas,
            });

            await userPolicyAccount.save().then((res) => {
                res.status(201).json({ message: 'Premium Info Added successfully' });
            }).catch((error) => {
                res.json({ errors:true, err:error});
                console.log(error)
            })


        });
    } catch (error) {
        console.log(error)
        const errors = handleErrors(error);
        res.json({ errors });
    }
};
