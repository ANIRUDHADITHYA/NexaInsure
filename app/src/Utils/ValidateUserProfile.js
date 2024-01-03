export function ValidateUserProfile(user) {
  let errors = {};
  

  if (!user.aadhar_card_no) {
    errors.aadhar_card_no = "Aadhar card number is required";
  } else if (user.aadhar_card_no.length > 12 || user.aadhar_card_no.length < 12) {
    errors.aadhar_card_no = "Invalid Aadhar card number";
  }

  if (!user.dl_no) {
    errors.dl_no = "Driver's license number is required";
  } else if (user.dl_no.length > 16 || user.dl_no.length < 16) {
    errors.dl_no = "Invalid driver's license number";
  }

  if (!user.blood_group) {
    errors.blood_group = "Blood group is required";
  }

  if (!user.address_line_1.trim()) {
    errors.address_line_1 = "Address Line 1 is required";
  }

  if (!user.address_line_2.trim()) {
    errors.address_line_2 = "Address Line 2 is required";
  }

  if (!user.state) {
    errors.state = "State is required";
  }

  if (!user.city.trim()) {
    errors.city = "City is required";
  }

  if (!user.pincode) {
    errors.pincode = "Pincode is required";
  } else if (!isValidPincode(user.pincode)) {
    errors.pincode = "Invalid pincode";
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
