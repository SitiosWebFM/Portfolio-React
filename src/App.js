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
import Footer from './components/Footer/Footer';
import BtnScrollUp from './components/BtnScrollUp/BtnScrollUp';
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
        <BtnScrollUp/>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </AnimateContext>
  );
}

export default App;
