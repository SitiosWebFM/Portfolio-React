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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vero temporibus repellat esse! Consequuntur, exercitationem placeat vero ad nulla quos neque vitae maxime error labore aspernatur necessitatibus dolores. Tenetur, sit!
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