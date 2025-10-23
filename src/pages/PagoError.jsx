import { Link } from 'react-router-dom';

export default function PagoError(){
  return (
    <div className="py-5 text-center">
      <h2 className="text-danger">Hubo un problema con el pago</h2>
      <p className="text-secondary">Inténtalo nuevamente o verifica tu método de pago (simulado).</p>
      <Link to="/comprar" className="btn btn-outline-info">Volver al carrito</Link>
    </div>
  );
}