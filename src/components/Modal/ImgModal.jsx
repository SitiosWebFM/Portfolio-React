import React from 'react'

const ImgModal = ({data}) => {
  return (
    <img src={data.img} alt={`Mockup-dispositivos-${data.name}`} />
  )
}

export default ImgModal