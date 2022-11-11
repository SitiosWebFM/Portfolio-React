import React, { useContext } from 'react'
import { Animate } from '../../context/Animate.context'
/* Styles */
import './About.css'
/* Components */
import TagCanvas from './TagCanvas'
import cv from './Curriculum/Curriculum Facundo Marconi.pdf'

const Skills = () => {
  const {animationClass} = useContext(Animate)

  
  return (
    <section className='section-page bg-gradient-2' id='about'>
      <h2 className='container-title' data-aos="zoom-out-down" data-aos-duration="1000">
        <span className='title animate__animated' onMouseOver={animationClass}>A</span>
        <span className='title animate__animated' onMouseOver={animationClass}>b</span>
        <span className='title animate__animated' onMouseOver={animationClass}>o</span>
        <span className='title animate__animated' onMouseOver={animationClass}>u</span>
        <span className='title animate__animated' onMouseOver={animationClass}>t</span>
        <span className='space'></span>
        <span className='title animate__animated' onMouseOver={animationClass}>M</span>
        <span className='title animate__animated' onMouseOver={animationClass}>e</span>
      </h2>
      <div className='container-page max-width'>
        <div className='container-text'>
          <p>
            Soy un joven de 18 años, que se supera día a día, aprendiendo constantemente nuevas tecnologías. Teniendo como objetivo poder vivir de lo que más me gusta que es la programación. Actualmente estudio en CoderHouse para la "Carrera de Desarrollo Full Stack" y complemento también de forma autodidacta.
          </p>
          <a className='btn-download-cv' href={cv} download={cv}>Download CV<i className="fa-solid fa-file-arrow-down"></i></a>
        </div>
        <div className='container-tagcanvas'>
          <TagCanvas/>
        </div>
      </div>
    </section>
  )
}

export default Skills