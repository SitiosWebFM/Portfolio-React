import React, { useState,useContext,useEffect } from 'react'
import { Animate } from '../../context/Animate.context'
/* Styles */
import './Skills.css'

const Skills = () => {

  const [stylesProgress , setStylesProgress] = useState(false)
  const {animationClass} = useContext(Animate)

  useEffect(() =>{

    const addStyles = () =>{
      if(window.scrollY >= 2300 && window.scrollY <= 4010){
        setStylesProgress(true)
      }else{
        setStylesProgress(false)
      }
    }

    window.addEventListener('scroll',addStyles)

    return () => {
      window.removeEventListener('scroll',addStyles)
    }
   
  },[stylesProgress])
  
  return (
    <section className='section-page bg-gradient-2'>
      <h2 className='container-title' data-aos="zoom-out-down" data-aos-duration="1000">
          <span className='title animate__animated' onMouseOver={animationClass}>S</span>
          <span className='title animate__animated' onMouseOver={animationClass}>k</span>
          <span className='title animate__animated' onMouseOver={animationClass}>i</span>
          <span className='title animate__animated' onMouseOver={animationClass}>l</span>
          <span className='title animate__animated' onMouseOver={animationClass}>l</span>
          <span className='title animate__animated' onMouseOver={animationClass}>s</span>
          <span className='space'></span>
          <span className='title animate__animated' onMouseOver={animationClass}>&</span>
          <br />
          <span className='title animate__animated' onMouseOver={animationClass}>E</span>
          <span className='title animate__animated' onMouseOver={animationClass}>x</span>
          <span className='title animate__animated' onMouseOver={animationClass}>p</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
          <span className='title animate__animated' onMouseOver={animationClass}>r</span>
          <span className='title animate__animated' onMouseOver={animationClass}>i</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
          <span className='title animate__animated' onMouseOver={animationClass}>n</span>
          <span className='title animate__animated' onMouseOver={animationClass}>c</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
      </h2>
      <div className='container-page max-width'>
        <div className='container-text'>
          <div className='container-p-skills'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vero temporibus repellat esse! Consequuntur, exercitationem placeat vero ad nulla quos neque vitae maxime error labore aspernatur necessitatibus dolores. Tenetur, sit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vero temporibus repellat esse! Consequuntur, exercitationem placeat vero ad nulla quos neque vitae maxime error labore aspernatur necessitatibus dolores. Tenetur, sit!
            </p>
          </div>
        </div>
        <div className='container-data'>
          <h5>HTML</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-html' : 'progress-in'}></div>
          </div>
          <h5>CSS</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-css' : 'progress-in'}></div>
          </div>
          <h5>JS</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-js' : 'progress-in'}></div>
          </div>
          <h5>REACT</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-react' : 'progress-in'}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills