import React from "react";
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import './App.css';
import Experiences from './styles/routelayout/Experience';
import Home from './styles/routelayout/Home';
import Projects from './styles/routelayout/Projects';
import NavBar from "./components/NavBar";
import "./styles/NavBar.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className= "App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path ="/projects" element ={<Projects />} />
            <Route path ="/experience" element ={<Experiences />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
