import React from "react";
import {Link} from "react-router-dom";
function NavBar(){
    return(
        <div className ="navbar">
            <div className ="toggleButton">
                <button></button>
            </div>
            <div className ="links">
                <Link to="/"> Home </Link>
                <Link to="/experience"> Experiences </Link>
                <Link to="/projects"> Projects </Link>
            </div>
        </div>
    )
}
export default NavBar;