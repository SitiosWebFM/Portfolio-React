import React ,{ useContext } from 'react'
/* IMG */
import Perfil from './img-home/avatar-1.png'
/* Styles */
import './Home.css'
import { Animate } from '../../context/Animate.context'


const Home = () => {

  const {animationClass} = useContext(Animate)

  return (
    <section className='section-page bg-gradient-1'>
      <div className='container-page max-width' style={{marginTop: '150px'}}>
        <div className='home-text'>
        <h2>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="500" data-aos-once="true">H</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="800" data-aos-once="true">o</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">l</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">a</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1400" data-aos-once="true">!</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1600" data-aos-once="true">,</span>
          <br/>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="500" data-aos-once="true">S</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="800" data-aos-once="true">o</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">y</span>
          <span className='space'></span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">F</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1400" data-aos-once="true">a</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">c</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">u</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2200" data-aos-once="true">,</span>
          <br/>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="500" data-aos-once="true">d</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="800" data-aos-once="true">e</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">s</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">a</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1400" data-aos-once="true">r</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1600" data-aos-once="true">r</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">o</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">l</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2200" data-aos-once="true">l</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2400" data-aos-once="true">a</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2600" data-aos-once="true">d</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="2800" data-aos-once="true">o</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">r</span>
          <span className='space'></span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">w</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">e</span>
          <span className='title-home animate__animated' onMouseOver={animationClass} data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">b</span>
        </h2>
          <div className='container-p'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore commodi consequatur libero, tenetur quas provident repellendus blanditiis amet suscipit veritatis cum cupiditate? Odit mollitia, recusandae numquam corporis animi harum.</p>
          </div>
        </div>
        <div className='home-img'>
            <img className='perfil' src={Perfil} alt='Imagen de mi rostro' />
        </div>
      </div>
    </section>
  )
}

export default Home