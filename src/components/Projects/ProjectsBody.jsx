import React from 'react'
import ModalBootstrap from '../Modal/Modal'

const ProjectsBody = ({project}) => {
  const {logo,name} = project

  return (
    <div className='card-data'>
      <div>
        <div className='bg'></div>
        <img className='card-img' src={logo} alt={`Projeccityt-${name}`}/>
        </div>
        <div className='card-data-text'>
        <ModalBootstrap data={project}/>
      </div>
    </div>
  )
}

export default ProjectsBody