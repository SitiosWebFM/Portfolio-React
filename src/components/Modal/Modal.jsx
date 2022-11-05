import React, { useState, Suspense, lazy} from 'react';
import { useEffect } from 'react';
import {dataProjects} from '../../data.jsx'
/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalBody = lazy(() => import ('./ModalBody.jsx'))

function ModalBootstrap({data}) {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState([])

  useEffect(() =>{
    dataProjects.filter(res => res.name === data.name ? setProject(res) : null)
  },[data])

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
        <Suspense fallback={<h3 className='suspense'>Loading...</h3>}>
          <Modal.Body>
            <ModalBody data={project}/>
          </Modal.Body>
          <footer className='footer-modal'>
            <div className='container-footer-modal'>
              <h4><a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a></h4>
            </div>
          </footer>
        </Suspense>
      </Modal>
    </>
  );
}

export default ModalBootstrap