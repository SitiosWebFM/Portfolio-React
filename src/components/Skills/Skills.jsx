import React, { useState,useContext,useEffect } from 'react'
import { Animate } from '../../context/Animate.context'
/* Styles */
import './Skills.css'

const Skills = () => {

  const [stylesProgress , setStylesProgress] = useState(false)
  const {animationClass} = useContext(Animate)

  useEffect(() =>{
    const sectionSkills = document.getElementById('skills')
    const sectionTop = sectionSkills.offsetTop - 450;


    const addStyles = () =>{
      if(window.scrollY >= sectionTop){
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
    <section className='section-page bg-gradient-2' id='skills'>
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
              Comencé como desarrollador web hace aproximadamente un año, estudiando de forma autodidacta con cursos en Youtube como los de Dalto, que me ayudaron mucho.
            </p>
            <p>
              Luego decidí inscribirme en CoderHouse para la "Carrera de Desarrollo Full Stack", en la cual actualmente sigo estudiando, esforzándome y actualizándome para obtener ese TOP-10!
            </p>
            <p>
              He trabajado para particulares como Freelancer, aportando trabajos a mi portafolio y así mismo más experiencia.
            </p>
          </div>
        </div>
        <div className='container-data'>
          <h5>Front-end</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-front' : 'progress-in'}></div>
          </div>
          <h5>Back-end</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-back' : 'progress-in'}></div>
          </div>
          <h5>React</h5>
          <div className="progress-data">
            <div className={stylesProgress ? 'progress-in background-react' : 'progress-in'}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills