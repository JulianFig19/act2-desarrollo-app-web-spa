import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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

      </Card.Body>
      <Button as={Link} to={`/Detallegame/${juego.id}`} variant="light">
      Ver
      </Button>
    </Card>
  );
};

export default Cardgame;