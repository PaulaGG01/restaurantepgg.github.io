import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img015 from '../assets/imagenes/img015.jpg'; // Importa la nueva imagen

export const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Columna del formulario */}
        <div className="col-md-6">
          <div className="mx-auto" style={{ width: "80%", marginTop: '40px' }}>
            <Form style={{ borderTop: '0px solid white', padding: '20px' }}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="text-dark">Nombre y apellido</Form.Label>
                <Form.Control type="name" placeholder="Escriba su nombre" style={{ borderColor:'#547d72'}} />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-dark">Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Escriba su correo electrónico" style={{ borderColor:'#547d70'}} />
                <Form.Text className="text-muted">
                  {/* Nosotros nunca compartiremos esta información con nadie más. */}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-dark">Consulta</Form.Label>
                <Form.Control type="Consulta" placeholder="Escriba su consulta" style={{ borderColor:'#547d70'}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="text-dark" type="checkbox" label="Check me out" style={{ borderColor:'#547d70'}} />
              </Form.Group>

              <Button style={{ backgroundColor: '#3da63d', border: '0' }} type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </div>

        {/* Columna de la imagen */}
        <div className="col-md-6 d-flex align-items-end justify-content-end">
          <img src={img015} alt="Imgpostre01" style={{ maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  );
};




