import { useEffect } from 'react';
/* Styles */
import './App.css';
/* Components */
import Navbar from './components/Navbar/NavBar'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import AnimateContext from './context/Animate.context';
/* Aos library */
import "aos/dist/aos.css";
import AOS from 'aos';

function App() {

  useEffect(() =>{
    AOS.init()
  },[])

  return (
    <AnimateContext>
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </AnimateContext>
  );
}

export default App;
