export function ValidateProfile(user, vehicleInfo) {
  let errors = {};
  const date = new Date();
  let year = date.getFullYear();
  

  if (!vehicleInfo.registration_number.trim()) {
    errors.registration_number = "Registration number is required";
  }

  if (!vehicleInfo.vehicle_name.trim()) {
    errors.vehicle_name = "Vehicle name is required";
  }

  if (!vehicleInfo.model.trim()) {
    errors.model = "Model is required";
  }

  if (!vehicleInfo.year) {
    errors.year = "Year is required";
  } else if (!vehicleInfo.year.trim.length == 4) {
    errors.year = "Invalid Year format";
  } else if (vehicleInfo.year > year) {
    errors.year = "Invalid Year";
  }

  if (!vehicleInfo.vehicle_color.trim()) {
    errors.vehicle_color = "Vehicle color is required";
  }

  if (!vehicleInfo.chassis_number.trim()) {
    errors.chassis_number = "Chassis number is required";
  }

  if (!vehicleInfo.rc_number.trim()) {
    errors.rc_number = "RC number is required";
  }

  if (!vehicleInfo.dealer_name.trim()) {
    errors.dealer_name = "Dealer name is required";
  }

  if (!vehicleInfo.ex_showroom_price) {
    errors.ex_showroom_price = "Ex-showroom price is required";
  } else if(!vehicleInfo.ex_showroom_price > 100000) {
    errors.ex_showroom_price = "Ex-showroom price should be greater 1 Lakhs"
  }

  if (!vehicleInfo.state) {
    errors.vehicle_state = "State is required";
  }

  if (!vehicleInfo.city.trim()) {
    errors.vehicle_city = "City is required";
  }

  if (!vehicleInfo.pincode) {
    errors.vehicle_pincode = "Pincode is required";
  } else if (!isValidPincode(vehicleInfo.pincode)) {
    errors.vehicle_pincode = "Invalid pincode";
  }

  return errors;


}


function isValidMobile(mobile) {
  return /^\d+$/.test(mobile) && mobile.length === 10;
}



function isValidPincode(pincode) {
  return /^\d{6}$/.test(pincode);
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
