import { getOffers } from '../data/products';
import ProductCard from '../components/ProductCard';
import PromoBanner from '../components/PromoBanner';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFire, FaTags, FaBolt } from 'react-icons/fa';
import './Ofertas.css';

export default function Ofertas(){
  const offers = getOffers();
  
  const bannerBadges = [
    { bg: 'danger', label: 'Descuentos Exclusivos', icon: FaTags },
    { bg: 'warning', text: 'dark', label: 'Tiempo Limitado', icon: FaFire }
  ];
  
  return (
    <div className="ofertas-page">
      <PromoBanner
        icon={FaFire}
        title="Ofertas Especiales"
        subtitle="Las mejores ofertas gaming al mejor precio"
        badges={bannerBadges}
        gradientColors={['#1a0000', '#0d0d0d', '#001a1a']}
      />

      <Container className="ofertas-content">
        {offers.length > 0 ? (
          <>
            <div className="ofertas-counter">
              <span className="counter-number">{offers.length}</span>
              <span className="counter-text">ofertas disponibles</span>
            </div>
            <Row xs={1} sm={2} md={3} className="ofertas-grid">
              {offers.map(p => (
                <Col key={p.id}>
                  <ProductCard p={p}/>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div className="ofertas-empty">
            <FaTags className="empty-icon" />
            <h3>No hay ofertas disponibles</h3>
            <p>Vuelve pronto para encontrar increíbles descuentos</p>
          </div>
        )}
      </Container>
    </div>
  );
}