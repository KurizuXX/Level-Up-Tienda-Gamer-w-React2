import { getOffers } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Ofertas(){
  const offers = getOffers();
  return (
    <div className="py-3">
      <h2>Ofertas</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {offers.map(p => <ProductCard key={p.id} p={p}/>) }
      </div>
    </div>
  );
}