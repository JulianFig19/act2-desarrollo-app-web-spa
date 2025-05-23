import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Enviado() {
  const navigate = useNavigate();
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Subscripción</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>¿Estás seguro de que deseas suscribirte a nuestras actualizaciones?
          Recibirás novedades, ofertas y noticias destacadas directamente en tu correo.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cerrar
          </Button>
          <Button as={Link} to={`/Sucess`} variant="primary">Aceptar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Enviado;