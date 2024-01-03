import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import useAccountForms from '../../Hooks/useAccountForms';

const Login = (props) => {
    const { handleLoginChange, handleLoginSubmit, loginValues, loginErrors, loginLoader } = useAccountForms();

    return (
        <div className="login-section">
            <div className='login-container'>
                <div className='login-header'>
                    <i class="fa-solid fa-xmark" onClick={()=>{props.login(false)}}></i>
                    <h2>Login Account</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={loginValues.email}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginValues.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <span className='forgot-password'><Link to="/forgot-password">Forgot password?</Link></span>
                    <button onClick={handleLoginSubmit}>Login</button>
                    <p className='dont-have-acc'>Don't have an account? <span onClick={()=>{props.login(false); props.register(true)}}>Register Now</span></p>
       
                </form>
                
            </div>
             </div>
    );
};

export default Login;
