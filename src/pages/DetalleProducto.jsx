import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../data/products';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';

export default function DetalleProducto(){
  const { id } = useParams();
  const navigate = useNavigate();
  const p = getById(id);

  if(!p){
    return <div className="py-4"><h3 className="text-danger">Producto no encontrado</h3></div>;
  }

  const addToCart = () => {
    const cart = getStored(STORAGE_KEYS.CART, []);
    const idx = cart.findIndex(i => i.id === p.id);
    if(idx>=0) cart[idx].qty += 1; else cart.push({ id: p.id, name: p.name, price: p.price, discount: p.discount||0, qty:1, img:p.img });
    setStored(STORAGE_KEYS.CART, cart);
    navigate('/comprar');
  };

  const finalPrice = p.discount ? Math.round(p.price * (1 - p.discount)) : p.price;

  return (
    <div className="row py-3 g-4">
      <div className="col-md-6"><img src={p.img} className="img-fluid rounded neon-border" alt={p.name}/></div>
      <div className="col-md-6">
        <h2 className="neon-text">{p.name}</h2>
        <p className="text-secondary">{p.desc}</p>
        {p.discount ? (
          <p><span className="text-decoration-line-through me-2 text-muted">${p.price.toLocaleString('es-CL')}</span><span className="h4 text-info">${finalPrice.toLocaleString('es-CL')}</span></p>
        ) : (
          <p className="h4">${p.price.toLocaleString('es-CL')}</p>
        )}
        <button className="btn btn-neon" onClick={addToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}