import { useState, useEffect } from "react";
const Header = () => {

    const [logButton, setLogButton] = useState("Login");

    //** If no dependency array => useeffect is called on every render */
    //** if dependency array is empty = [] => useEffect is called on initial render and just once when component is rendered first time */


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                    <button onClick={() => {
                        logButton === "Login" ? setLogButton("Logout") : setLogButton("Login");
                    }}> {logButton} </button>
                </ul>
            </div>
        </div >
    );

};

export default Header;