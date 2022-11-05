import React from 'react'

const GifModal = ({data}) => {
  return (
    <img className='gif' src={data.gif} alt={`funcionamiento-${data.name}`} />
  )
}

export default GifModal