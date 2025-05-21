import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Notfound () {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div
        style={{
          maxWidth: '500px',
          margin: '100px auto', // centra vertical y horizontal
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>¡Página no encontrada!</Alert.Heading>
          <p>
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </Alert>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Button onClick={() => setShow(true)}>Mostrar mensaje</Button>
    </div>
  );
}

export default Notfound;