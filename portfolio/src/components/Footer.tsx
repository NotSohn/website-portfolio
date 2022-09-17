import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/RouteStyle/Footer.css";
function Footer(){
    return (
    <div className = "footer">
        <div className = "socialMedia">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
        <p> &copy; 2022 jsohn.app</p>
    </div>
    );
}

export default Footer;