import { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import Cardgame from '../Componentes/Cardgame/Cardgame';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = () => {
  const [lista, setLista] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  const endpoints = {
    todos: 'https://mock.apidog.com/m1/882435-864045-default/videogames?games=all',
    PlayStation5: 'https://mock.apidog.com/m1/882435-864045-default/videogames?platform=PlayStation%205',
    XboxSeriesX: 'https://mock.apidog.com/m1/882435-864045-default/videogames?platforms=Xbox%20Series%20X',
    PC: 'https://mock.apidog.com/m1/882435-864045-default/videogames?platform=PC',
    NintendoSwitch: 'https://mock.apidog.com/m1/882435-864045-default/videogames?platform=Nintendo%20Switch'
  };

  useEffect(() => {
    const endpoint = endpoints[filtro];
    console.log('Llamando a:', endpoint);

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('Datos recibidos:', data);
        setLista(data);
      })
      .catch((err) => console.error('Error al cargar videojuegos:', err));
  }, [filtro]);

  return (
    <Container className="my-5">
      <h1 className="mb-4">Lista de Videojuegos</h1>

      <DropdownButton
        id="dropdown-plataformas"
        title={`Filtrar por plataforma: ${filtro}`}
        className="mb-4"
        onSelect={(selected) => setFiltro(selected)}
      >
        {Object.keys(endpoints).map((plataforma) => (
          <Dropdown.Item key={plataforma} eventKey={plataforma}>
            {plataforma}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <Row>
        {lista.map((juego) => (
          <Col md={6} lg={4} key={juego.id}>
            <Cardgame juego={juego} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listado;
