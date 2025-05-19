import React from 'react';
import "./Navbar.css";

const Navbar = () => {
return (
    <nav className="navbar">
      <div className="logo">Gam32</div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Búsqueda</a></li>
        <button className='boton-perfil'>Perfil</button>
      </ul>
    </nav>
  );
};

export default Navbar;