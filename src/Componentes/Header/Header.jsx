import React from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/busqueda?query=${encodeURIComponent(input)}`);
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="nav">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/Logo_GAM32_blanco.png"
            alt="Gam32"
            height="30"
            className="d-inline-block align-top"
            style={{ paddingLeft: '64px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/listavideojuegos">Videojuegos</Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Buscar juego"
              className="me-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="secondary" onClick={handleSearch}>
              <i className="bi bi-search text-white me-1"></i>
            </Button>
          </Form>

          <Form className="d-flex ms-3" >
            <Button as={Link} to="/login" variant="light">Iniciar sesión</Button>
          </Form>
          <Nav.Link as={Link} to="/perfil" style={{ paddingRight: '64px' }}><i className="bi bi-person-circle text-white me-1"></i>Perfil</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;