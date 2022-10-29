import { createContext } from "react";

export const Animate = createContext(null)

function AnimateContext ({children}) {

  const animationClass = (e) =>{
    e.target.classList.add('animate__rubberBand')
    setTimeout(() =>{
      e.target.classList.remove('animate__rubberBand')
    },1000)
  }

  return(
    <Animate.Provider value={{animationClass}}>
      {children}
    </Animate.Provider>
  )
}

export default AnimateContext