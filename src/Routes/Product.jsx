import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img011 from '../assets/imagenes/img011.jpg';
import imgbebidas01 from '../assets/imagenes/imgbebidas01.jpg';
import imgpostre01 from '../assets/imagenes/imgpostre01.jpg';

export const Product = () => {
  return (
    <div className="row justify-content-center text-center">
      <div className="col-lg-3 mb-4">
        <Card style={{ width: '18rem', border: '0', marginTop: '50px', backgroundColor: '#0b4535', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
          <Card.Img variant="top" src={img011} />
          <Card.Body>
            <Card.Title>Entradas, picoteos y fondos</Card.Title>
            <Card.Text>
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </Card.Text>
            <Link to="#">
              <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0'}}>Ir a carta</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3 mb-4">
        <Card style={{ width: '18rem', border: '0', marginTop: '50px', backgroundColor: '#0b4535', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
          <Card.Img variant="top" src={imgpostre01} />
          <Card.Body>
            <Card.Title>Desayunos y postres</Card.Title>
            <Card.Text>
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </Card.Text>
            <Link to="#">
              <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0'}}>Ir a carta</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      
      <div className="col-lg-3 mb-4">
        <Card style={{ width: '18rem', border: '0', marginTop: '50px', backgroundColor: '#0b4535', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
          <Card.Img variant="top" src={imgbebidas01} />
          <Card.Body>
            <Card.Title>Bebidas</Card.Title>
            <Card.Text>
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </Card.Text>
            <Link to="#">
              <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0'}}>Ir a carta</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};


