import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';

export default function Comprar(){
  const navigate = useNavigate();
  const [cart, setCart] = useState(()=> getStored(STORAGE_KEYS.CART, []));

  const totals = useMemo(()=>{
    const subt = cart.reduce((acc, i)=>{
      const unit = i.discount ? Math.round(i.price * (1 - i.discount)) : i.price;
      return acc + unit * i.qty;
    },0);
    const shipping = subt>0 ? 3990 : 0;
    return { subtotal: subt, shipping, total: subt + shipping };
  },[cart]);

  const updateQty = (id, qty) => {
    const next = cart.map(i => i.id===id ? {...i, qty: Math.max(1, qty)} : i);
    setCart(next); setStored(STORAGE_KEYS.CART, next);
  };
  const removeItem = (id) => {
    const next = cart.filter(i=> i.id!==id);
    setCart(next); setStored(STORAGE_KEYS.CART, next);
  };

  const pagar = () => {
    // Simulación básica de pago
    const success = Math.random() > 0.3; // 70% éxito
    if(success){
      setStored(STORAGE_KEYS.CART, []);
      navigate('/pago-correcto');
    } else {
      navigate('/pago-error');
    }
  };

  return (
    <div className="row py-3 g-4">
      <div className="col-lg-8">
        <h2>Carrito</h2>
        {cart.length===0 ? (
          <p className="text-secondary">Tu carrito está vacío.</p>
        ) : (
          <div className="list-group">
            {cart.map(item=>{
              const unit = item.discount ? Math.round(item.price * (1 - item.discount)) : item.price;
              return (
                <div key={item.id} className="list-group-item bg-dark text-light border-info d-flex align-items-center gap-3">
                  <img src={item.img} alt={item.name} width={72} className="rounded"/>
                  <div className="flex-grow-1">
                    <strong>{item.name}</strong>
                    <div className="small text-secondary">Unidad: ${unit.toLocaleString('es-CL')}</div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input type="number" min="1" value={item.qty} onChange={e=>updateQty(item.id, Number(e.target.value)||1)} className="form-control form-control-sm" style={{width:90}}/>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>removeItem(item.id)}>Quitar</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="col-lg-4">
        <div className="card p-3">
          <h5 className="mb-3">Resumen</h5>
          <div className="d-flex justify-content-between"><span>Subtotal</span><span>${totals.subtotal.toLocaleString('es-CL')}</span></div>
          <div className="d-flex justify-content-between"><span>Envío</span><span>${totals.shipping.toLocaleString('es-CL')}</span></div>
          <hr/>
          <div className="d-flex justify-content-between h5"><span>Total</span><span>${totals.total.toLocaleString('es-CL')}</span></div>
          <button className="btn btn-neon mt-3 w-100" onClick={pagar} disabled={cart.length===0}>Pagar</button>
        </div>
      </div>
    </div>
  );
}