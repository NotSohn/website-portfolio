import React from "react";
import {motion} from "framer-motion";
import pageTransition from "../pageTransition";

function Experiences (){
    return (
    <motion.div className ="experiences"
    initial = "out"
    animate = "in"
    exit = "out"
    variants ={pageTransition}>
        <div className = "about"> <h1>This is the Experiences</h1>
        </div>
    </motion.div>
    )
}

export default Experiences;