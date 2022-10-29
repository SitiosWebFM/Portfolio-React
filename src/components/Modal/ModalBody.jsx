import React, { useState } from 'react'
import { useEffect } from 'react'
/* Styles */
import './Modal.css'

const ModalBody = ({data}) => {
  const [indexValue, setIndexValue] = useState(0)
  const [imgIndex, setImgIndex] = useState()
  const dataImages = data.sections

  const handleCarrousel = (index, images, next = true) =>{
    const condition = next ? index < images.length - 1 : index > 0;//Condicion principal => si hay siguiente , la condicion va a ser para que se mueva a la derecha y sino a lka izquierda
    const nextIndex = next ? (condition ? index + 1 : 0)  : (condition ? index - 1 : images.length - 1);
    /*El valor del neztIndex, en caso de que se cumpla next, y la condition se cumpla, se va a sumar a mi index y sino 0 
    en caso de que no se cumpla next, y la condition se cumpla, se resta uno a mi index y sino le resto uno a mi cantidad de casilleros en el array*/
    setImgIndex(images[nextIndex])
    setIndexValue(nextIndex)

  }

  const MoveLeft = () =>{
    handleCarrousel(indexValue, dataImages, false)
    const imgElement = document.getElementById('img-section')
    imgElement.classList.toggle('img-width-change')
  }

  const MoveRight = () =>{
    handleCarrousel(indexValue, dataImages)
    const imgElement = document.getElementById('img-section')
    imgElement.classList.toggle('img-width-change')
  }


  useEffect(() =>{
    if(data.sections){setImgIndex(data.sections[0])}else{setImgIndex(null)}
   },[data])


  return (
    <>
      <div className='container-descripcion'>
        <h2 className='title-modal'>Descripción</h2>
        <div className='descripcion'>
          <img src={data.img} alt={`Mockup-dispositivos-${data.name}`} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate non id repellat, doloribus accusamus temporibus maxime eos vel totam! Dolore sequi quaerat officia deleniti numquam debitis labore dolorem quia.</p>
        </div>
      </div>
      {
      data.sections ?
        <div className='container-funcionamiento'>
          <h2 className='title-modal'>Secciones</h2>
          <div className='container-img-secciones'>
            <img src={imgIndex ? imgIndex : null} alt="" id='img-section'/>
          </div>
          <div className='container-buttons'>
            <div onClick={MoveLeft}><i className="fa-regular fa-circle-left"></i></div>
            <div onClick={MoveRight}><i className="fa-regular fa-circle-right"></i></div>
          </div>
        </div>
        :
        <div className='container-funcionamiento'>
          <h2 className='title-modal'>Funcionamiento</h2>
          <img className='gif-ecommerce' src={data.gif} alt={`funcionamiento-${data.name}`} />
        </div>
    
      }
    
    </>
  )
}

export default ModalBody