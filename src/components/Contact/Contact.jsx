import React, {useState, useContext} from 'react';
/* Styles */
import './Contact.css'
/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
/* Context */
import { Animate } from '../../context/Animate.context';
/* EmialJS */
import emailjs from '@emailjs/browser'
/* SweetAlert */
import Swal from 'sweetalert2'

function Contact() {
  const [validated, setValidated] = useState(false);
  const {animationClass} = useContext(Animate)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      emailjs.sendForm('service_89682f6', 'template_x3w4prb', event.target,'aWuugn8Sdo6JI8_wo')
        .then(res => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se envío correctamente!'
          })
        }).catch(err => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Hubo un problema, vuelve a intentarlo!'
          })
        })
    }

    setValidated(true);
  };

  return (
  <section className='section-page bg-gradient-1' id='contact'>
     <h2 className='container-title' data-aos="zoom-out-down" data-aos-duration="1000">
          <span className='title animate__animated' onMouseOver={animationClass}>C</span>
          <span className='title animate__animated' onMouseOver={animationClass}>o</span>
          <span className='title animate__animated' onMouseOver={animationClass}>n</span>
          <span className='title animate__animated' onMouseOver={animationClass}>t</span>
          <span className='title animate__animated' onMouseOver={animationClass}>a</span>
          <span className='title animate__animated' onMouseOver={animationClass}>c</span> 
          <span className='title animate__animated' onMouseOver={animationClass}>t</span>
          <span className='space'></span>
          <span className='title animate__animated' onMouseOver={animationClass}>M</span>
          <span className='title animate__animated' onMouseOver={animationClass}>e</span>
      </h2>
      <div className='container-page max-width'>

        <div className='info-personal'>
          <div className='container-info'>
            <i className="fa-regular fa-envelope"></i>
            <div className='info'>
              <h3>Email</h3>
              <p>facundomarconi04@gmail.com</p>
            </div>
          </div>

          <div className='container-info'>
            <i className="fa-solid fa-location-dot"></i>
            <div className='info'>
              <h3>Location</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-contact'>
          <Row className="mb-5">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <div className='form-group'>
                <input className='form-input' type="text" placeholder=' ' name='user_name' required/>
                <label className='form-label'>Name</label>
                <Form.Control.Feedback type="invalid">
                  Porfavor completar con un nombre válido.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <div className='form-group'>
                <input className='form-input' type="text" placeholder=' ' name='user_email' required/>
                <label className='form-label'>Email</label>
                <Form.Control.Feedback type="invalid">
                  Porfavor completa con un email válido.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Row className='mb-5'>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <div className='form-group'>
                <input className='form-input' type="text" placeholder=' ' name='user_project' required/>
                <label className='form-label'>Project</label>
                <Form.Control.Feedback type="invalid">
                  Porfavor completa con un projecto válido.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <div className='form-group'>
                <textarea className='form-input message' type="text" placeholder=' ' name='user_message' required/>
                <label className='form-label'>Message</label>
                <Form.Control.Feedback type="invalid">
                  Porfavor completa con un mensaje válido.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Button type="submit">Enviar<i className="fa-regular fa-paper-plane"></i></Button>
        </Form>
      </div>
    </section>
  );
}

export default Contact