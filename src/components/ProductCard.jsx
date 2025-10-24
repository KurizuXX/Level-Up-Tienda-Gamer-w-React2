import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductCard.css';

export default function ProductCard({product}){
  return (
    <Card className="product-card">
      <div className="product-image-wrapper">
        <Card.Img variant="top" src={product.img} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <Button 
            as={Link} 
            to={`/productos/${product.id}`} 
            variant="info"
            className="product-quick-view"
          >
            Ver más
          </Button>
        </div>
      </div>

      <Card.Body className="product-body">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-desc">{product.desc}</Card.Text>
        <div className="product-footer">
          <div className="product-price-group">
            <strong className="price-normal">${product.price.toLocaleString('es-CL')}</strong>
          </div>
          <Button 
            as={Link} 
            to={`/productos/${product.id}`} 
            variant="outline-info"
            size="sm"
            className="product-button"
          >
            Detalle
          </Button>
        </div>
      </Card.Body>


    </Card>
  );
}