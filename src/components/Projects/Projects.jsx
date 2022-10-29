import React, {useContext,useEffect} from 'react';
/* Styles */
import './Projects.css'
/* Data */
import {dataProjects} from '../../data.jsx';
/* Components */
import ProjectsBody from './ProjectsBody';
import { Animate } from '../../context/Animate.context';


const Projects = () => {

  const {animationClass} = useContext(Animate)

  useEffect(() =>{

    const container = document.querySelectorAll('.card-data')
    const width  = window.innerWidth
    const height = window.innerHeight
  
    const halfWidth = width / 2
    const halfHeight = height / 2
  
    container.forEach(card => {
      card.addEventListener('mousemove',(event)=>{
        
        const rotationX = (halfWidth - event.pageX) / 110;
        const rotationY = (halfHeight - event.pageY) / 110;
        
        card.style.transform =`rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
      })
    });

    container.forEach(card => {
      card.addEventListener('mouseenter', ()=> {
        card.style.transition = "transform .15s ease";
      });

    });


    container.forEach(card => {
      card.addEventListener('mouseleave',()=>{
        card.style.transition ='transform .5s ease'
        card.style.transform ='rotateY(0deg) rotateX(0deg)'
      })
    });


  },[])




  return (
    <section className='section-projects'>
      <div className='container-projects'>
        <h2 className='container-title margin-title' data-aos="fade-left" data-aos-duration="1000">
          <span className='title animate__animated' onMouseOver={animationClass}>P</span>
          <span className='title animate__animated' onMouseOver={animationClass}>r</span>
          <span className='title animate__animated' onMouseOver={animationClass}>o</span>
          <span className='title animate__animated' onMouseOver={animationClass}>j</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
          <span className='title animate__animated' onMouseOver={animationClass}>c</span>
          <span className='title animate__animated' onMouseOver={animationClass}>t</span>
          <span className='title animate__animated' onMouseOver={animationClass}>s</span>
        </h2>
        <div className='cards'>
          {
            dataProjects.map(project =>{
              return <ProjectsBody key={project.id} project={project}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects