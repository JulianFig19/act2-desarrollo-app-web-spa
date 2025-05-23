import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import './Cardgame.css'

const Cardgame = ({ juego, loading }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        {loading ? (
          <>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Subtitle} animation="glow">
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={12} /> <Placeholder xs={8} /> <Placeholder xs={6} />
            </Placeholder>
            <Placeholder.Button variant="light" xs={3} />
          </>
        ) : (
          <>
            <Card.Title>{juego.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {juego.genre} • {juego.releaseYear}
            </Card.Subtitle>
            <Card.Text>{juego.description}</Card.Text>
            <div className="mb-2">
              <strong>Plataformas:</strong>{' '}
              {juego.platforms.map((p, idx) => (
                <Badge key={idx} bg="secondary" className="me-1">
                  {p}
                </Badge>
              ))}
            </div>
            <Button as={Link} to={`/Detallegame/${juego.id}`} variant="outline-primary">
              Ver
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cardgame;