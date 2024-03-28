import React from 'react';
import img012 from '../assets/imagenes/img012.jpg';
import imgpostre01 from '../assets/imagenes/imgpostre01.jpg'; // Importa la nueva imagen

const titleStyle = {
  fontFamily: 'Poppins sans-serif', // Cambia la fuente del texto
  color: '#0b4535', // Cambia el color del texto
  fontWeight: 'bold', // Cambia el peso de la fuente a negrita
  lineHeight: '1.2', // Cambia la altura de la línea
};

const subtitleStyle = {
  fontFamily: 'Poppins, sans-serif', // Cambia la fuente del texto
  color: '#ffffff', // Cambia el color del texto
  fontWeight: '', // Establece el peso de la fuente a normal
  lineHeight: '1.5', // Cambia la altura de la línea
};

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          {/* <h2 style={{ ...subtitleStyle, fontSize: '1.7rem' }}>Restaurante</h2> */}
          <h1 style={{ ...titleStyle, fontSize: '5.5rem' }}>El Huerto</h1>
          <h3 style={{ ...subtitleStyle, fontSize: '1.7rem' }}>Cocina consciente desde 1980</h3>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={img012} alt="Img012" style={{ maxWidth: '100%', maxHeight: '600px', border: '0' }} />
        </div>
      </div>
    </div>
  );
};









