import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
    const [logButton, setLogButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //** If no dependency array => useeffect is called on every render */
    //** if dependency array is empty = [] => useEffect is called on initial render and just once when component is rendered first time */
    return (
        <div className="flex justify-between shadow-xl ">
            <div className="logo-container">
                <Link to="/"> <img className="w-56" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"></img></Link>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex gap-4 p-4 m-4">
                    <li>Online Status:{
                        onlineStatus ? '🟢' : '🔴'
                    }</li>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/contact"> Contact </Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li> <Link to="/grocery"> Grocery </Link></li>
                    <button onClick={() => {
                        logButton === "Login" ? setLogButton("Logout") : setLogButton("Login");
                    }}> {logButton} </button>
                </ul>
            </div>
        </div >
    );
};
export default Header;