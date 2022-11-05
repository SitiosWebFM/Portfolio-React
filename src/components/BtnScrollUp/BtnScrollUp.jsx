import React, { useEffect } from 'react'
import { useState } from 'react'
/* Styles */
import './BtnScrollUp.css'

const BtnScrollUp = () => {

  const [scrolled, setScrolled] = useState('')

  useEffect(() =>{
    const onScroll = () =>{
      if(window.scrollY > 100){
        setScrolled('showbtn')
      }else{
        setScrolled('')
      }
    }

    window.addEventListener('scroll',onScroll)

    return () => {
      window.removeEventListener('scroll',onScroll)
    }

  },[])

  const handlerScrollUp = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }


  return (
    <div className={scrolled ? "scroll-up-btn showbtn" : "scroll-up-btn" } id="scroll-up-btn" onClick={handlerScrollUp}>
      <i className="fas fa-angle-up"></i>
    </div>
  )
}

export default BtnScrollUp