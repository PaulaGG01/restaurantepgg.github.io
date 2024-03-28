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
  color: '#547d72', // Cambia el color del texto
  fontWeight: '', // Establece el peso de la fuente a normal
  lineHeight: '1.5', // Cambia la altura de la línea
};

export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h1 style={{ ...titleStyle, fontSize: '4.0rem' }}>Página en construcción</h1>
          <h3 style={{ ...subtitleStyle, fontSize: '1.7rem' }}>Lamentamos las molestias</h3>
        </div>
        <div className="col-md-6">
          <img src={imgpostre01} alt="Imgpostre01" style={{ maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  );
};
