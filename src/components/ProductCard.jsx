import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductCard.css';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';

export default function ProductCard({ product, p }) {
  
  const prod = product || p;
  const navigate = useNavigate();

  if (!prod) return null;

  // ==========================
  // Normalización de datos
  // ==========================

  const name = prod.name || prod.nombre || 'Producto sin nombre';
  const desc = prod.desc || prod.descripcion || '';
  const image =
    prod.image ||       // mock local
    prod.img ||         
    prod.imagen_url ||  // Supabase
    '/placeholder.png';

  const rawPrice = prod.price ?? prod.precio ?? 0;
  const priceNumber =
    typeof rawPrice === 'number'
      ? rawPrice
      : Number(rawPrice) || 0;

  const formattedPrice = `$${priceNumber.toLocaleString('es-CL')}`;

  // ==========================
  // Carrito
  // ==========================

  const addToCart = () => {
    const cart = getStored(STORAGE_KEYS.CART, []);
    const idx = cart.findIndex((item) => item.id === prod.id);

    if (idx >= 0) {
      cart[idx].qty += 1;
    } else {
      cart.push({
        id: prod.id,
        name,
        price: priceNumber,
        qty: 1,
        img: image,
      });
    }

    setStored(STORAGE_KEYS.CART, cart);
  };

  const handleBuyNow = () => {
    // 1) lo agregamos al carrito
    addToCart();
    // 2) navegamos a la página de compra
    navigate('/comprar');
  };

  // ==========================
  // Render
  // ==========================

  return (
    <Card className="product-card">
      <div className="product-image-wrapper">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="product-image"
        />
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
        <Card.Title className="product-title">{name}</Card.Title>
        <Card.Text className="product-desc">{desc}</Card.Text>

        <div className="product-footer">
          <div className="product-price-group">
            <strong className="price-normal">{formattedPrice}</strong>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}