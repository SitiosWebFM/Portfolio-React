import React, { useContext } from 'react'
import { Animate } from '../../context/Animate.context'
/* Styles */
import './About.css'
/* Components */
import TagCanvas from './TagCanvas'

const Skills = () => {
  const {animationClass} = useContext(Animate)

  
  return (
    <section className='section-about'>
      <div className='container-about'>
        <div className='container-text'>
        <h2 className='container-title' data-aos="fade-left" data-aos-duration="1000">
          <span className='title animate__animated' onMouseOver={animationClass}>A</span>
          <span className='title animate__animated' onMouseOver={animationClass}>b</span>
          <span className='title animate__animated' onMouseOver={animationClass}>o</span>
          <span className='title animate__animated' onMouseOver={animationClass}>u</span>
          <span className='title animate__animated' onMouseOver={animationClass}>t</span>
          <span className='space'></span>
          <span className='title animate__animated' onMouseOver={animationClass}>M</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
        </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vero temporibus repellat esse! Consequuntur, exercitationem placeat vero ad nulla quos neque vitae maxime error labore aspernatur necessitatibus dolores. Tenetur, sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam expedita distinctio dolores magni nihil qui assumenda iusto consequatur ipsa? Dolor officiis laboriosam quia blanditiis? Culpa error dicta minus molestiae. Quasi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eaque consequatur. Asperiores consectetur in, illo pariatur officia eveniet eaque exercitationem vel labore veniam voluptas, et voluptatum quaerat, qui nulla a?
          </p>
        </div>
        <div className='container-tagcanvas'>
          <TagCanvas/>
        </div>
      </div>
    </section>
  )
}

export default Skills