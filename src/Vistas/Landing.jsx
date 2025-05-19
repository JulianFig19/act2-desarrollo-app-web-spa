import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";
import Bannerjuego from "../Componentes/Banner-juego/Bannerjuego";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Bannerjuego />
      <div>
        <h1>Sobre nosotros</h1>
    <p>Somos una empresa dedicada a la venta de los ultimos videojuegos más destacados en el mercado</p>
      </div>
    </>
  );
};

export default Landing;
