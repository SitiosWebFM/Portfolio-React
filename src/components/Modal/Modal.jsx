import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {dataProjects} from '../../data.jsx'
import ModalBody from './ModalBody.jsx';

function ModalBootstrap({name}) {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState([])

  useEffect(() =>{
    dataProjects.filter(res => res.name === name ? setProject(res) : null)
  },[name])

  const showContentProjects = () =>{
    setShow(true)
  }


  return (
    <>
      <Button className="me-2 mb-2" onClick={showContentProjects}>
        View project
      </Button>

      <Modal className='hola' show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ModalBody data={project}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBootstrap