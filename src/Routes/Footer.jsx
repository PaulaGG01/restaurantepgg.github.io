import React from 'react';
import { Link } from 'react-router-dom';
import logoinstagram from '../assets/imagenes/logoinstagram.png';
import logofacebook from '../assets/imagenes/logofacebook.png';

const Footer = () => {
  return (
    <div className="footer" style={{ padding: '18px', backgroundColor: '#0b4535', border: '0', marginTop: '0px', color: '#ffffff' }}>
      <div className="row">
        <div className="col-sm">
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>Dirección: Orrego Luo 054, Providencia.</p>
          <p style={{ fontSize: '12px',  fontFamily: 'Poppins, sans-serif'}}>Teléfono: +569 73810442</p>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>Correo electrónico: contacto@elhuerto.cl</p>
        </div>
        <div className="col-sm">
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>Horario de atención:</p>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>De lunes a sábados de 9am a 11pm.</p>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif'  }}>Domingo de 9am a 4pm.</p>
        </div>
        <div className="col-sm">
          <p style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>Sígenos y hagamos comunidad:</p>
          {/* <Link to="/" style={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Ir a Inicio</Link>
          <br /> */}
          <a href="https://www.instagram.com/tu_cuenta_de_instagram">
            <img src={logoinstagram} alt="Instagram" style={{ width: '20px', height: '20px' }} />
          </a>
          <br />
          <a href="https://www.facebook.com/tu_cuenta_de_facebook">
            <img src={logofacebook} alt="Facebook" style={{ width: '20px', height: '20px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;




