import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-columns">
                <div className="footer-column-content">
                    <h1>NexaInsure<span className="dot-in">.in</span></h1>
                    <p>NexaInsure.in car Insurance, A cutting-edge blockchain-based solution for instant quotes, streamlined policy management, and fast claims processing. Revolutionizing insurance with a user-friendly interface and secure digital storage.</p></div>
                <div className="footer-column">
                    <h1>Information</h1>
                    <ul>
                        <li><Link to="">Terms and Condition</Link></li>
                        <li><Link to="">Claim Policy</Link></li>
                        <li><Link to="">Premium Policy</Link></li>
                        <li><Link to="">Affiliate and Referral Policy</Link></li>
                        <li><Link to="">Fees and Commisions Policy</Link></li>
                        <li><Link to="">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-column span">
                    <div>
                        <h1>Need help?</h1>
                        <ul>
                            <li><i class="fa-regular fa-envelope"></i> <Link to="">Create a Ticket</Link></li>
                            <li><i class="fa-brands fa-whatsapp"></i> <Link to="">+91 99999 99999</Link></li>
                            <li><i class="fa-solid fa-at"></i> <Link to="">support@nexainsure.in</Link></li>
                        </ul>
                    </div>
                    <div className='follow-us-section'>
                        <h1>Follow us</h1>
                        <ul className="socialIcon">
                            <li><Link to="#" style={{ marginLeft: "0px" }}><i className="fa-brands fa-facebook-square"></i></Link></li>
                            <li><Link to="#" ><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#" ><i class="fa-brands fa-whatsapp"></i></Link></li>
                            <li><Link to="#" ><i className="fa-brands fa-telegram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2023 nexainsure.in. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;