import useAccountForms from "../../Hooks/useAccountForms";
import "./Register.css";
import { ValidateRegister } from './../../Utils/ValidateAccount';

const Register = (props) => {

    const {handleRegisterChange, handleRegisterSubmit, registerValues, registerErrors, registerLoader} = useAccountForms(ValidateRegister);
    return (
        <div className="login-section">
            <div className='login-container register'>
                <div className='login-header'>
                    <i class="fa-solid fa-xmark" onClick={()=>{props.register(false)}}></i>
                    <h2>Register New Account</h2>
                </div>
                <form>
                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label>First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={registerValues.first_name}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label>Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={registerValues.last_name}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label>Email Address</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={registerValues.email}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label>Mobile Number</label>
                            <input
                                type="number"
                                id="mobile"
                                name="mobile"
                                value={registerValues.mobile}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label>Set Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={registerValues.password}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                value={registerValues.confirm_password}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                    </div>
                    <button onClick={handleRegisterSubmit}>Register Now</button>
                    <p className='dont-have-acc'>Already have an account? <span onClick={()=>{props.login(true); props.register(false)}}>Login Now</span></p>

                </form>

            </div>
        </div>
    );
};

export default Register;
