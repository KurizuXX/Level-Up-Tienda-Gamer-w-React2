import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';

export default function ProductCard({product, p}){
  const prod = product || p;
  if(!prod) return null;
  const navigate = useNavigate();

  const addToCart = () => {
    const cart = getStored(STORAGE_KEYS.CART, []);
    const idx = cart.findIndex(i => i.id === prod.id);
    if(idx >= 0) cart[idx].qty += 1;
    else cart.push({ id: prod.id, name: prod.name, price: prod.price, discount: prod.discount||0, qty:1, img:prod.img });
    setStored(STORAGE_KEYS.CART, cart);
  };

  const buyNow = () => {
    addToCart();
    navigate('/comprar');
  };

  return (
    <Card className="product-card">
      <div className="product-image-wrapper">
        <Card.Img variant="top" src={prod.img} alt={prod.name} className="product-image" />
        <div className="product-overlay">
          <Button 
            as={Link} 
            to={`/productos/${prod.id}`} 
            variant="info"
            className="product-quick-view"
          >
            Ver más
          </Button>
        </div>
      </div>

      <Card.Body className="product-body">
        <Card.Title className="product-title">{prod.name}</Card.Title>
        <Card.Text className="product-desc">{prod.desc}</Card.Text>
        <div className="product-footer">
          <div className="product-price-group">
            <strong className="price-normal">${prod.price.toLocaleString('es-CL')}</strong>
          </div>
        </div>
      </Card.Body>


    </Card>
  );
}