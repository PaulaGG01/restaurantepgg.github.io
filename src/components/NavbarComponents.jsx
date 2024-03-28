import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import icono from '../assets/imagenes/icono.png'; // Importa la nueva imagen


export const NavbarComponents = () => {
  return (
    <Navbar bg="icono" variant="dark" style={{ backgroundColor: '#0b4535', color: '#ffffff' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={icono}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Icono"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/products">Carta</Nav.Link>
            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


