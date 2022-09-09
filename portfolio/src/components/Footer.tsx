import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";
function Footer(){
    return (
    <div className = "footer">
        <div className = "socialMedia">
            <GitHubIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <p> &copy; 2022 jsohn.app</p>
    </div>
    );
}

export default Footer;