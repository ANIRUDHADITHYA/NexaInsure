const express = require('express');
const router = express.Router();
const Profile = require("../Models/ProfileModel");

router.get('/:mobile', async (req, res) => {
    try {
        const mobile = req.params.mobile;
        console.log(mobile)
        
        const user = await Profile.findOne({ mobile });

        if (!user) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;