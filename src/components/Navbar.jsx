import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar as BSNavbar, Container, Nav, Badge, Button } from 'react-bootstrap';
import { STORAGE_KEYS, getStored, clearSession } from '../utils/storage';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

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
    <BSNavbar expand="lg" variant="dark" className="custom-navbar">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          Level-up Gamer
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/comprar" className="cart-link">
              <FaShoppingCart className="me-1"/>
              Carrito
              {cartCount > 0 && (
                <Badge pill className="cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
            
            {session ? (
              <>
                <span className="user-greeting">
                  Hola, <strong>{session.email}</strong>
                </span>
                <Button 
                  variant="outline-info" 
                  size="sm" 
                  onClick={logout}
                  className="logout-btn"
                >
                  <FaSignOutAlt className="me-1"/>Salir
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/iniciar-sesion">
                  <FaUserCircle className="me-1"/>Ingresar
                </Nav.Link>
                <Button 
                  as={Link} 
                  to="/registro" 
                  size="sm"
                  className="btn-neon"
                >
                  Crear cuenta
                </Button>
              </>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}