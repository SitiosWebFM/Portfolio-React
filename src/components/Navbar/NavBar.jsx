import { useState ,useEffect } from "react";
/* Styles */
import './Navbar.css'



function Navbar() {
  const [activeLink , setActiveLink] = useState('home')
  const [scrolled , setScrolled] = useState(false)
  const [activeBtn , setActiveBtn] = useState(false)

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

  const handlerMenu = () =>{
    const btn = document.getElementById('btn-mobile')
    if(btn.classList.toggle('active-btn')){
      setActiveBtn(true)
    }else{
      setActiveBtn(false)
    }

  }


  const onUpdateActiveLink = (linkValue) =>{
    setActiveLink(linkValue)
    const btn = document.getElementById('btn-mobile')
    if(!setActiveBtn(false)){
      btn.classList.remove('active-btn')
    }
  }

  return (
    <>
      <div className="menu-offcanvas" style={activeBtn ? {visibility:'visible',left:'-0%'} : {visibility: 'hidden'}}>
        <div className="nav-list">
          <ul>
            <li className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><a href="#home">Home</a></li>
            <li className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><a href="#about">About</a></li>
            <li className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><a href="#projects">Projects</a></li>
            <li className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><a href="#skills">Skills</a></li>
            <li className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>


      <header className={scrolled ? 'navbar-portfolio navbar-scroll' : 'navbar-portfolio' }>

      {/* Menu Mobile */}
      <div className="container-navbar-mobile">
          <div className="nav-btn" id='btn-mobile' onClick={handlerMenu}>
            <div className="nav-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='container-social'>
            <a href="https://www.linkedin.com/in/facundomarconi/" target="_blank" rel="noopener noreferrer">
              <div className='social-icon'>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
          </div>
      </div>

      {/* Menu Desktop */}
      <div className='container-navbar'>
        <div className='navbar-logo'>
          <a href="#home" className="title-logo"><h1><span>FM</span>Portfolio.</h1></a>
        </div>
        <ul className="nav-list">
          <li className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><a href="#home">Home</a></li>
          <li className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><a href="#about">About</a></li>
          <li className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><a href="#projects">Projects</a></li>
          <li className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><a href="#skills">Skills</a></li>        </ul>
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
    </>
  );
}

export default Navbar;