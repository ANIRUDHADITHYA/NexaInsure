export function ValidateRegister(values) {
  
    let errors = {};
  
    if (!values.first_name.trim()) {
      errors.first_name = "First Name Required";
    } else if (values.first_name.trim().split(' ').length > 2) {
      errors.first_name = "First Name should have only one space inside";
    }
  
    if (!values.last_name.trim()) {
      errors.last_name = "Last Name Required";
    } else if (values.last_name.trim().split(' ').length > 2) {
      errors.last_name = "Last Name should have only one space inside";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid Email Format";
    }
  
    if (!values.mobile.trim()) {
      errors.mobile = "Mobile Required";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password Required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password Mismatch";
    } else if (values.password.length < 8) {
      errors.password = "Password should contain at least 8 characters";
    }
  
    return errors;
  }
  
 


  export function ValidateLogin(values) {
    let errors = {};
  
    
  
    if (!values.email.trim()) {
      errors.email = "Email Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid Email Format";
    }
  
    
    if (!values.password.trim()) {
      errors.password = "Password Required";
    }
  
    return errors;
  }
  
  
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  