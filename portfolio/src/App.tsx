import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation} from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import "./styles/RouteStyle/NavBar.css";
import Footer from "./components/Footer";
import Experiences from './styles/routelayout/Experience';
import Home from './styles/routelayout/Home';
import Projects from './styles/routelayout/Projects';
import {AnimatePresence} from 'framer-motion';

function App() {
 /* const location = useLocation();*/
  return (
    <div className= "App">
      <BrowserRouter>
        <NavBar/>
        <div>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path ="/projects" element ={<Projects />} />
            <Route path ="/experience" element ={<Experiences />} />
          </Routes>
        </AnimatePresence>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
