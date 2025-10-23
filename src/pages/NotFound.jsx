import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <div className="py-5 text-center">
      <h1 className="display-4">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-secondary">La página que buscas no existe o fue movida.</p>
      <Link className="btn btn-neon" to="/">Volver al inicio</Link>
    </div>
  );
}