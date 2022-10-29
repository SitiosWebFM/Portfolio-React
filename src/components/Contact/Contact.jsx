import React, { useState } from 'react';
/* Styles */
import './Contact.css'
/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
    }

    setValidated(true);
  };

  return (
    <section className='section-contact'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type="text" placeholder='caca'/>
            <Form.Control.Feedback type="invalid">
              Porfavor completa con un nombre válido.
            </Form.Control.Feedback>
          </div>
        <Button type="submit">Enviar</Button>
      </Form>
    </section>
  );
}

export default Contact