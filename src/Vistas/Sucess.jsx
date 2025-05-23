import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Sucess () {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div
        style={{
          maxWidth: '500px',
          margin: '100px auto',
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <Alert variant="Succes" onClose={() => setShow(false)}>
          <Alert.Heading>✅ ¡Suscripción exitosa!</Alert.Heading>
          <p>
            Pronto recibirás nuestras novedades en tu correo electrónico.
          </p>
          <Button variant="secondary" as={Link} to="/Perfil">
            Cerrar
          </Button>
        </Alert>
      </div>
    );
  }
}

export default Sucess;