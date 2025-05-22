import { Card, Badge } from 'react-bootstrap';

const Cardgame = ({ juego }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{juego.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{juego.genre} • {juego.releaseYear}</Card.Subtitle>
        
        <Card.Text>{juego.description}</Card.Text>

        <div className="mb-2">
          <strong>Plataformas:</strong>{' '}
          {juego.platforms.map((p, idx) => (
            <Badge key={idx} bg="secondary" className="me-1">{p}</Badge>
          ))}
        </div>

        <div>
        <strong>Rating:</strong>{' '}
        {juego.rating}{' '}
        <i className="bi bi-star-fill text-dark"></i>
        </div>

        <div>
          <strong>Reserva:</strong>{' '}
          {juego.isReserve ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">No disponible</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardgame;