import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../styles/Productos.css';

export default function Productos(){
  const [term, setTerm] = useState('');
  const [filtered, setFiltered] = useState(PRODUCTS);

  const handleSearch = (e) => {
    const value = e.target.value;
    setTerm(value);
    
    const t = value.trim().toLowerCase();
    if(!t) {
      setFiltered(PRODUCTS);
    } else {
      setFiltered(PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(t) || 
        product.desc.toLowerCase().includes(t)
      ));
    }
  };

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
      <Row xs={1} sm={2} md={3} className="productos-grid">
        {filtered.map(product => (
          <Col key={product.id}>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}