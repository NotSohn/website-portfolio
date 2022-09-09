import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    const [ExpandNavBar,setExpandNavBar] = useState(false);
    const location = useLocation();
    useEffect(() =>{
        setExpandNavBar(false);
    },[location]);
    return(
        <div className ="navbar" id={ExpandNavBar ? "open" : "close"}>
            <div className ="toggleButton">
                <button onClick = {() => {setExpandNavBar((prev) => !prev)}}> 
                    <MenuIcon/>
                </button>
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