import React from "react";
import "./Bannerjuego.css";

const Bannerjuego = () => {
  return (
    <div className="banner">
      <img src="/orig.webp" alt="Mafia" className="banner-bg" />

      <div className="banner-overlay">
        <div className="banner-info">
          <h4>Conoce nuestros juegos</h4>
          <h1>Lanzamientos</h1>
          <button className="info-btn">MÁS INFORMACIÓN</button>
          <div className="dots">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerjuego;