import { getFeatured } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home(){
  const featured = getFeatured();
  return (
    <div className="py-4">
      <div className="p-4 mb-4 neon-border rounded-3 text-center">
        <h1 className="display-6 neon-text">Bienvenid@ a Level-up Gamer</h1>
        <p className="text-secondary">Equipos, accesorios y juegos con vibra neón.</p>
      </div>
      <h3 className="mb-3">Destacados</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {featured.map(p => <ProductCard key={p.id} p={p}/>) }
      </div>
    </div>
  );
}