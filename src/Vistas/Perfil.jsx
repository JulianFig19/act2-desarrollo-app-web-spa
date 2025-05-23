import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Perfil = () => {
  const usuario = {
    nombre: 'David Duran',
    correo: 'user123@gmail.com',
    username: 'dd123',
    avatar: '/perfil.png',
    juegosFavoritos: ['The Legend of Arken', 'Hogwarts Legacy', 'God of War: Ragnarok']
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow">
            <Card.Img
              variant="top"
              src={usuario.avatar}
              alt="Avatar del usuario"
              className="rounded-circle mx-auto my-4"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{usuario.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">@{usuario.username}</Card.Subtitle>
              <Card.Text>
                <strong>Correo:</strong> {usuario.correo}
              </Card.Text>
              <Card.Text>
                <strong>Juegos favoritos:</strong><br />
                {usuario.juegosFavoritos.map((juego, index) => (
                  <span key={index} className="badge bg-secondary me-1">{juego}</span>
                ))}
              </Card.Text>
              <Button variant="primary">Editar perfil</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;