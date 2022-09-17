import React from "react";
import {motion} from "framer-motion";
import pageTransition from "../pageTransition";

function Projects(){
    return <motion.div className ="projects"
    initial = "out"
    animate = "in"
    exit = "out"
    variants ={pageTransition}>
        This is the Projects
    
    </motion.div>
}

export default Projects;