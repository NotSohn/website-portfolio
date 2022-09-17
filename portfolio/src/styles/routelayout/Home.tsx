import React from "react";
import  "../RouteStyle/Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {motion} from 'framer-motion';
import pageTransition from "../pageTransition";

function Home(){
    return(
        <motion.div className = "home"
        initial = "out"
        animate = "in"
        exit = "out"
        variants ={pageTransition}>
            <div className = "introduction">
                <h2>Hello! My Name is Justin Sohn.</h2>
                <div className = "prompt">
                    <p>I am a Software Engineer from Southern California with a passion to create and learn new things.</p>
                </div>
                <div className ="contacts">
                    <p> You can contact me through these apps.</p>
                    <GitHubIcon/>
                    <LinkedInIcon/>
                    <EmailIcon/>
                </div>
            </div>
        <div className="skills">
            <ol className="list">
                <h2>Programming Languages</h2>
                <span>Javascript | Typescript | C | C++ | Java | Python | Intel x86_64 YASM Assembly </span>
            </ol>
            <ol>
                <h2>FrontEnd</h2>
                <span>ReactJS| HTML| CSS | BootStrap | MaterialUI | TailwindCSS | StyledComponents | Github | VSCode </span>
            </ol>
        </div> 
        <div className = "Hobbies">
            <h2>Hobbies</h2>
            <div className = "topic">
                <p>I like to play video games on my free time, such as.</p>
                <li>
                    VALORANT, League Of Legends, osu!, Rainbow Six Siege, CSGO, and many more.
                </li>
            </div>
        </div>
     </motion.div>
)
}

export default Home;