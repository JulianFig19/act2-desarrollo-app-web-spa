import { Container, Button } from 'react-bootstrap';
import './Suscripcion.css';

const Suscripcion = () => {
  return (
    <div className="seccion-suscripcion d-flex align-items-center justify-content-center text-center">
      <Container>
        <img src="/Logo_GAM32_blanco.png" alt="Gam32 logo" className="mb-3" style={{ height: '40px' }} />
        <h2 className="text-white fw-bold">Suscríbete a la lista de correo de Gam32</h2>
        <p className="text-light mx-auto" style={{ maxWidth: '600px' }}>
          Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más.
        </p>
        <Button variant="outline-light" size="lg" className="mt-3 px-4 rounded-pill">
          Suscribirte ya
        </Button>
      </Container>
    </div>
  );
};

export default Suscripcion;