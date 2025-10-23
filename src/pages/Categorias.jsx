import { CATEGORIES } from '../data/products';
import CategoryCard from '../components/CategoryCard';

export default function Categorias(){
  return (
    <div className="py-3">
      <h2>Categorías</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {CATEGORIES.map(c => <CategoryCard key={c.id} c={c}/>) }
      </div>
    </div>
  );
}