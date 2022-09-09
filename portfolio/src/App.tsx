import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Experiences from './styles/routelayout/Experience';
import Home from './styles/routelayout/Home';
import Projects from './styles/routelayout/Projects';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/projects" element = {<Projects />} />
          <Route path ="/experience" element = {<Experiences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
