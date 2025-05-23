import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Busqueda = () => {
  const [params] = useSearchParams();
  const query = params.get('query')?.toLowerCase() || '';
  console.log("Query recibido:", query);
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
        console.log('Buscando en API el ID:', query);
      setLoading(true);

      // Crear un array de promesas del 1 al 10
      const requests = Array.from({ length: 10 }, (_, i) =>
        fetch(`https://mock.apidog.com/m1/882435-864045-default/videogames/${i + 1}`).then(res => res.json())
      );

      Promise.all(requests)
        .then(data => {
          // Filtrar resultados por coincidencia con el query
          const filtrados = data.filter(juego =>
            juego.title.toLowerCase().includes(query)
          );
          setResultados(filtrados);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error al buscar:', err);
          setResultados([]);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="container my-5">
      <h2>Resultados para: <em>{query}</em></h2>
      {loading ? (
        <Spinner animation="border" />
      ) : resultados.length > 0 ? (
        <ul>
          {resultados.map((juego) => (
            <li key={juego.id}>{juego.title}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Busqueda;