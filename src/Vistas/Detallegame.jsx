import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Container, Spinner, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Detallegame = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`https://mock.apidog.com/m1/882435-864045-default/videogames/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Juego no encontrado');
        }
        return res.json();
      })
      .then(data => {
        setJuego(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('No se pudo cargar el videojuego.');
        setLoading(false);
      });
  }, [id]);

  return (
    <Container className="my-5">
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {juego && (
        <Card className="shadow">
          <Card.Body>
            <Card.Title>{juego.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {juego.genre} • {juego.releaseYear}
            </Card.Subtitle>
            <Card.Text>
              <strong>Descripción:</strong> {juego.description}<br />
              <strong>Plataformas:</strong> {juego.platforms?.join(', ')}<br />
              <strong>Rating:</strong> {juego.rating} <i className="bi bi-star-fill text-dark"></i><br />
              <strong>Reserva:</strong>{' '}
              <span className={`badge bg-${juego.isReserve ? 'success' : 'danger'}`}>
                {juego.isReserve ? 'Disponible' : 'No disponible'}
              </span>
            </Card.Text>
            <Button as={Link} to="/listavideojuegos" variant="secondary">
              Volver
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Detallegame;