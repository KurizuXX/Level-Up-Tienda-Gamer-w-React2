// src/components/Footer.jsx

import { Link } from 'react-router-dom'
import amexImg from '../assets/images/amex.png'
import dinersImg from '../assets/images/diners-club.png'
import mastercardImg from '../assets/images/mastercard.png'
import visaImg from '../assets/images/visa.png'

export default function Footer(){
  return (
    <footer className="footer-neo mt-5 pt-5 border-top border-info">
      <div className="container">
        <div className="row py-4 gy-4">
          {/* Logo + medios de pago */}
          <div className="col-lg-3 col-md-6">
            <h2 className="logo-text neon-text mb-3">LEVEL-UP</h2>
            <div className="payment-icons d-flex align-items-center gap-3">
              <img src={amexImg} alt="American Express" width="40" height="28" />
              <img src={dinersImg} alt="Diners Club" width="40" height="28" />
              <img src={mastercardImg} alt="Mastercard" width="40" height="28" />
              <img src={visaImg} alt="Visa" width="40" height="28" />
            </div>
          </div>

          {/* Nosotros */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">NOSOTROS</h5>
            <ul className="footer-links">
              <li><Link to="/nosotros">Sobre nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">ENLACES RÁPIDOS</h5>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/categorias">Categorías</Link></li>
              <li><Link to="/ofertas">Ofertas</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">CONTACTO</h5>
            <ul className="footer-contact">
              <li className="d-flex align-items-center gap-2">
                <span className="text-secondary">✉</span>
                <a href="mailto:contacto@levelup.cl">contacto@levelup.cl</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="text-secondary">☎</span>
                <a href="tel:+56955979994">+56 9 5597 9994</a>
              </li>
            </ul>
            <p className="footer-description mt-3 text-secondary">
              El arsenal de los gamers más exigentes de Chile, <strong>seleccionado por expertos</strong>.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top border-info-subtle">
          <p className="mb-2 mb-md-0 text-secondary">© {new Date().getFullYear()}, Level-Up</p>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/nosotros" className="footer-bottom-link">Política de privacidad</Link>
            <span className="mx-1 text-secondary">|</span>
            <Link to="/nosotros" className="footer-bottom-link">Política de reembolso</Link>
            <span className="mx-1 text-secondary">|</span>
            <Link to="/nosotros" className="footer-bottom-link">Política de envío</Link>
            <span className="mx-1 text-secondary">|</span>
            <Link to="/nosotros" className="footer-bottom-link">Términos del servicio</Link>
            <span className="mx-1 text-secondary">|</span>
            <Link to="/contacto" className="footer-bottom-link">Información de contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
