import { useParams } from 'react-router-dom';
import { getByCategory, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoriaDetalle(){
  const { id } = useParams();
  const cat = CATEGORIES.find(c=>c.id===id);
  const prods = getByCategory(id);
  return (
    <div className="py-3">
      <h2>{cat? cat.name : 'Categoría'}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {prods.map(p => <ProductCard key={p.id} p={p}/>) }
      </div>
    </div>
  );
}