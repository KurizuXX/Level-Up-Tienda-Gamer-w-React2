import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { API_URL } from '../utils/api';
import '../styles/Productos.css';

export default function Productos() {
  const [products, setProducts] = useState([]);   // lista completa
  const [filtered, setFiltered] = useState([]);   // lista filtrada
  const [term, setTerm] = useState('');           // texto del buscador
  const [loading, setLoading] = useState(true);   // estado de carga
  const [error, setError] = useState(null);       // mensaje de error

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Llamamos al backend
        const res = await fetch(`${API_URL}/productos`);

        console.log('[Productos] Status:', res.status);

        if (!res.ok) {
          throw new Error(`Error HTTP ${res.status}`);
        }

        // 2. Parseamos JSON
        const data = await res.json();
        console.log('[Productos] Data cruda API:', data);

        // 3. Normalizamos para que ProductCard reciba lo que espera
        //    Supabase/Express probablemente te devuelve algo como:
        //    { id, nombre, descripcion, precio, imagen_url, ... }
        const normalized = data.map((p) => ({
          id: p.id,
          name: p.nombre,                        // lo que mostrará ProductCard
          desc: p.descripcion,                   // idem
          price: Number(p.precio),               // asegurarnos que es número
          image: p.imagen_url,                   // url de la imagen
          raw: p,                                // por si quieres usar el objeto original
        }));

        setProducts(normalized);
        setFiltered(normalized);
      } catch (err) {
        console.error('[Productos] Error fetch:', err);
        setError('No se pudieron cargar los productos desde el servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setTerm(value);

    const t = value.trim().toLowerCase();

    if (!t) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(t) ||
          (p.desc || '').toLowerCase().includes(t)
        )
      );
    }
  };

  if (loading) {
    return (
      <Container className="productos-page">
        <p>Cargando productos...</p>
      </Container>
    );
  }

  return (
    <Container className="productos-page">
      <div className="productos-header">
        <h2 className="productos-title">Productos</h2>
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          value={term}
          onChange={handleSearch}
          className="productos-search"
        />
      </div>

      {error && (
        <p className="text-danger" style={{ marginBottom: '1rem' }}>
          {error}
        </p>
      )}

      <Row xs={1} sm={2} md={3} className="productos-grid">
        {filtered.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}