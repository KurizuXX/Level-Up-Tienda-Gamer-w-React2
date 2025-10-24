import { getFeatured } from '../data/products';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Home.css';

export default function Home(){
  const featured = getFeatured();
  return (
    <>
      <Hero />

      {/* DESTACADOS */}
      <Container className="home-featured">
        <h3 className="featured-title">Productos Destacados</h3>
        <Row xs={1} sm={2} md={3} className="featured-grid">

          {featured.map(product => (
            <Col key={product.id}>
              <ProductCard product={product}/>
            </Col>
          ))}
        </Row>
      </Container>


    </>
  );
}