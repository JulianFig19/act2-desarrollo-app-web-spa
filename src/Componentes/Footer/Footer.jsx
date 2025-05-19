import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p> Todos los derechos reservados.</p>
      <p> GAM32 © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;