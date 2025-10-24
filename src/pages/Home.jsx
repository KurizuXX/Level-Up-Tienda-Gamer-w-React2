import { getFeatured } from '../data/products';
import { CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTags, FaFire, FaBolt } from 'react-icons/fa';
import '../styles/Home.css';

export default function Home(){
  const featured = getFeatured();
  const topCategories = CATEGORIES.slice(0, 3); // Primeras 3 categorías
  
  const offersBadges = [
    { bg: 'danger', label: 'Ofertas Limitadas', icon: FaFire },
    { bg: 'info', label: 'Hasta 50% OFF', icon: FaBolt }
  ];
  
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

      {/* BANNER DE OFERTAS */}
      <PromoBanner
        icon={FaTags}
        title="¡Ofertas Increíbles!"
        subtitle="Descubre los mejores descuentos en productos gaming"
        badges={offersBadges}
        gradientColors={['#1a0000', '#0d0d0d', '#001a1a']}
      />

      {/* CATEGORÍAS DESTACADAS */}
      <Container className="home-categories">
        <h3 className="categories-title">Categorías Populares</h3>
        <Row xs={1} sm={2} md={3} className="categories-grid">
          {topCategories.map(category => (
            <Col key={category.id}>
              <CategoryCard category={category}/>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}