import React from 'react'
/* Styles */
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer container-page'>
      <div className='container-footer'>
        <h4>Created By Facundo Marconi | <i className="fa-regular fa-copyright"></i> All rights reserved.</h4>
        <a href="https://github.com/SitiosWebFM" target='_blank' rel='noreferrer'><i className="icon fa-brands fa-github"></i></a>
      </div>
    </footer>
  )
}

export default Footer