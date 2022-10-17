import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  Introduction,
  Prompt,
  Skills,
  List,
  Hobbies,
  Topic,
  CardWrapper,
} from "../../styles/RouteStyle/Home.style";
import {
  Background,
  HomeContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
import "../../resources/resume.json";
import { Typography } from "@mui/material";
import SelfShot from "../../resources/selfshot.jpg";

function Home() {
  return (
    <motion.div
      className="home"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <HomeContainer>
        <CardWrapper />
        <img src=SelfShot/>
        <Introduction>Justin Sohn</Introduction>
        <Prompt>
          I am currently attend California State University, Fullerton as a
          Computer Science Major.
        </Prompt>
        <Skills>Programming Languages </Skills>
        <List>
          <Typography variant="subtitle2">
            Javascript | Typescript | C | C++ | Java | Python | Intel x86_64
            YASM Assembly{" "}
          </Typography>
        </List>
        <Skills>
          <Typography variant="caption">Skills </Typography>
        </Skills>
        <List>
          ReactJS | Shellscipt | HTML | CSS | MaterialUI | StyledComponents |
          Github{" "}
        </List>
        <Hobbies>
          <h2>Hobbies</h2>
          <div className="topic">
            <p>I like to play video games on my free time, such as.</p>
            <li></li>
          </div>
        </Hobbies>
      </HomeContainer>
    </motion.div>
  );
}

export default Home;
