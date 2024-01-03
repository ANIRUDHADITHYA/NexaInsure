import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    const { user, logout } = props;
    const { close } = props; 

    function handleLogout() {
        logout()
        window.location.reload()
    }
    function handleDummy() {
        console.log("")
    }


    return (
        <div className="navbar-container">
            <div className="navabr-logo-container">
                <Link to="/dashboard"><h1>NexaInsure<span className="dot-in">.in</span></h1></Link>
            </div>
            <div className="navabr-items">
                <ul>
                    <li><Link to="" >About Us</Link></li>
                    <li><Link to="" >Claim</Link></li>
                    <li><Link to="" >Renewal</Link></li>
                    <li><Link to="" >New Policy</Link></li>
                </ul>
            </div>
            <div className="navbar-account-button">
                {user ?
                    <div className="tooltip-container">
                    <Link to="/dashboard" className="account-logo" style={{color: "#2D4798", fontWeight: "600"}}>
                      Hi! {user.first_name}.
                    </Link>
                    <span className="tooltip-text">
                      <button onClick={handleLogout}><span><i class="fa-solid fa-right-from-bracket"></i></span>Logout</button>
                    </span>
                  </div> :
                    <>
                        <div className="account-icon">
                            <img src="/Asserts/Icons/user.png" alt="account-icon"></img>
                        </div>
                        <button className="account-logo" onClick={() => {props ? close(true) : handleDummy()}}>Accounts</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar;