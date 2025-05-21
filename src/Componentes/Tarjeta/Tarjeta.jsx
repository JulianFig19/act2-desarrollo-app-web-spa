import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from "react-icons/fa";

function Tarjeta({ titulo, texto, imagen }) {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;