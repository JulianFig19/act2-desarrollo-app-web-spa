import React from "react";
import Bannerjuego from "../Componentes/Banner-juego/Bannerjuego";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";

const productos = [
  {
    titulo: "Recomendaciones Exclusivas",
    texto: "Encuentra los mejores juegos y contenido basado en tus preferencias y forma de jugar.",
    imagen: "/beneficio01.jpg",
  },
  {
    titulo: "Tu Juego Perfecto",
    texto: "Descubre qué juego se adapta mejor a tu estilo en nuestro test rápido de 2 minutos.",
    imagen: "/beneficio02.jpg",
  },
  {
    titulo: "Construye tu Leyenda",
    texto: "Mejor experiencia con la orientación de expertos en cada paso del camino.",
    imagen: "/beneficio03.jpg",
  },
];

const Landing = () => {
  return (
    <>
      <Bannerjuego />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '1rem' }}>
        {productos.map((item, index) => (
          <Tarjeta
            key={index}
            titulo={item.titulo}
            texto={item.texto}
            imagen={item.imagen}
          />
        ))}
      </div>
    </>
  );
};

export default Landing;
