import { useState ,useEffect } from "react";
/* Styles */
import './Navbar.css'

function Navbar() {
  const [activeLink , setActiveLink] = useState('home')
  const [scrolled , setScrolled] = useState(false)

  useEffect(() =>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    

    window.addEventListener('scroll',onScroll)

    return () => {
      window.removeEventListener('scroll',onScroll)
    }

  },[])


  const onUpdateActiveLink = (linkValue) =>{
    setActiveLink(linkValue)
  }

  return (
    <header className={scrolled ? 'navbar-portfolio navbar-scroll' : 'navbar-portfolio'}>
      <div className='container-navbar'>
        <div className='navbar-logo'>
          <a href="#home" className="title-logo"><h1><span>FM</span>Portfolio.</h1></a>
        </div>
        <ul className="nav-list">
          <li className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><a href="#home">Home</a></li>
          <li className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><a href="#projects">Projects</a></li>
          <li className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><a href="#skills">Skills</a></li>
          <li className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><a href="#about">About</a></li>
        </ul>
        <div className='container-social'>
        <a href="https://www.linkedin.com/in/facundomarconi/" target="_blank" rel="noopener noreferrer">
          <div className='social-icon'>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </a>
          <a href="#contact" className='btn-redirect-contact'><span>Comunicate conmigo!</span></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;