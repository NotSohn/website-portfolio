import React from "react";
import  "../Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';  

function Home(){
    return(
        <div className = "home">
            <div className = "about">
                <h2>Hello! My Name is Justin Sohn.</h2>
                <div className = "prompt">
                    <p>I am currently focusing on Front End Software Development and have a passion to create and learn new things.</p>
                </div>
                <div className ="contacts">
                    <GitHubIcon/>
                    <LinkedInIcon/>
                    <EmailIcon/>
                </div>
            </div>
        <div className="skills">
            <ol className="list">
                <h2>Programming Languages</h2>
                <span>Javascript, Java, Python, C, C++, Typescript, Intel x86_64 Assemlby </span>
            </ol>
            <ol>
                <h2>FrontEnd</h2>
                <span>ReactJS, HTML, CSS, React Native, NPM, BootStrap, MaterialUI, TailwinCSS, StyledComponents</span>
            </ol>
        </div>
    </div>
)
}

export default Home;