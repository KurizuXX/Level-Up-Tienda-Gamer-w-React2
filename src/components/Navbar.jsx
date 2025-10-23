import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { STORAGE_KEYS, getStored, setStored, clearSession } from '../utils/storage';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar(){
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [session, setSession] = useState(null);

  useEffect(()=>{
    const cart = getStored(STORAGE_KEYS.CART, []);
    setCartCount(cart.reduce((acc, i)=> acc + i.qty, 0));
    setSession(getStored(STORAGE_KEYS.SESSION, null));

    const onStorage = () => {
      const c = getStored(STORAGE_KEYS.CART, []);
      setCartCount(c.reduce((acc, i)=> acc + i.qty, 0));
      setSession(getStored(STORAGE_KEYS.SESSION, null));
    };
    window.addEventListener('storage', onStorage);
    return ()=> window.removeEventListener('storage', onStorage);
  },[]);

  const logout = () => {
    clearSession();
    setSession(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-info">
      <div className="container">
        <Link className="navbar-brand" to="/">Level-up Gamer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/categorias">Categorías</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ofertas">Ofertas</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blogs">Blogs</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nosotros">Nosotros</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink className="nav-link position-relative" to="/comprar">
                <FaShoppingCart className="me-1"/>
                Carrito
                {cartCount>0 && <span className="badge badge-cart position-absolute top-0 start-100 translate-middle rounded-pill">{cartCount}</span>}
              </NavLink>
            </li>
            {session ? (
              <>
                <li className="nav-item text-info small me-2">Hola, <strong>{session.email}</strong></li>
                <li className="nav-item"><button className="btn btn-sm btn-outline-info" onClick={logout}><FaSignOutAlt className="me-1"/>Salir</button></li>
              </>
            ) : (
              <>
                <li className="nav-item"><NavLink className="nav-link" to="/iniciar-sesion"><FaUserCircle className="me-1"/>Ingresar</NavLink></li>
                <li className="nav-item"><NavLink className="btn btn-sm btn-neon" to="/registro">Crear cuenta</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}