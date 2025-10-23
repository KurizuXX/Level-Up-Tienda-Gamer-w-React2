import { Link } from 'react-router-dom';

export default function PagoCorrecto(){
  return (
    <div className="py-5 text-center">
      <h2 className="neon-text">¡Pago realizado con éxito!</h2>
      <p className="text-secondary">Gracias por tu compra. Te enviaremos un correo con el detalle (ficticio).</p>
      <Link to="/" className="btn btn-outline-info">Volver al inicio</Link>
    </div>
  );
}