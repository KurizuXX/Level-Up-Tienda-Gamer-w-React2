import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useMemo, useState } from 'react';

export default function Productos(){
  const [term, setTerm] = useState('');
  const filtered = useMemo(()=>{
    const t = term.trim().toLowerCase();
    if(!t) return PRODUCTS;
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t));
  },[term]);

  return (
    <div className="py-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Productos</h2>
        <input className="form-control w-auto" placeholder="Buscar" value={term} onChange={e=>setTerm(e.target.value)} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {filtered.map(p => <ProductCard key={p.id} p={p}/>) }
      </div>
    </div>
  );
}