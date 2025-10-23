import { Link } from 'react-router-dom';

export default function ProductCard({p}){
  const finalPrice = p.discount ? Math.round(p.price * (1 - p.discount)) : p.price;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={p.img} className="card-img-top" alt={p.name} />
        <div className="card-body">
          <h5 className="card-title neon-text">{p.name}</h5>
          <p className="card-text small text-secondary">{p.desc}</p>
          {p.discount ? (
            <p className="mb-2"><span className="text-decoration-line-through me-2 text-muted">${p.price.toLocaleString('es-CL')}</span><strong className="text-info">${finalPrice.toLocaleString('es-CL')}</strong></p>
          ) : (
            <p className="mb-2"><strong>${p.price.toLocaleString('es-CL')}</strong></p>
          )}
          <Link to={`/productos/${p.id}`} className="btn btn-sm btn-outline-info">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
}