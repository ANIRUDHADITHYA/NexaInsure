const { saveUserProfile } = require('../Middlewares/ProfileMiddleware');
const { saveUserVehicleInfo } = require('../Middlewares/VehicleInfoMiddleware');
const {saveUserPolicyAccount} = require('../Middlewares/PolicyAccountMiddleware');
const router = require('express').Router();

router.post("/add_profile", saveUserProfile);
router.post("/add_vehicle_info", saveUserVehicleInfo);
router.post("/add_policy_account", saveUserPolicyAccount);
module.exports = router;