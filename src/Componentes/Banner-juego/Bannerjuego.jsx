import React from "react";
import "./Bannerjuego.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Bannerjuego = () => {
  return (
    <div className="banner">
      <img src="/doom.jpg" alt="doom" className="banner-bg" />

      <div className="banner-overlay">
        <div className="banner-info">
          <h5>Conoce nuestros juegos en</h5>
          <h1>Lanzamiento</h1>
          <Button as={Link} to={`/listavideojuegos`} variant="outline-light">
          Más información
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bannerjuego;