import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import '../styles/Hero.css';

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: 'Potencia tu Gaming',
      description: 'Descubre la mejor selección de componentes y accesorios gaming para llevar tu experiencia al siguiente nivel',
      buttonText: 'Ver Productos',
      buttonLink: '/productos'
    },
    {
      id: 2,
      image: banner2,
      title: 'Ofertas Exclusivas',
      description: 'Aprovecha increíbles descuentos en los mejores productos gaming. ¡No te pierdas estas oportunidades!',
      buttonText: 'Ver Ofertas',
      buttonLink: '/ofertas'
    },
    {
      id: 3,
      image: banner3,
      title: 'Categorías Premium',
      description: 'Explora nuestras categorías especializadas: PC Gaming, Periféricos, Consolas y más',
      buttonText: 'Ver Categorías',
      buttonLink: '/categorias'
    }
  ];

  return (
    <section className="hero-section">
      <Carousel fade interval={5000} pause="hover">
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="hero-image-wrapper">
              <img
                className="d-block w-100 hero-image"
                src={slide.image}
                alt={slide.title}
              />
              <div className="hero-overlay"></div>
            </div>
            <Carousel.Caption className="hero-caption">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <Button 
                as={Link} 
                to={slide.buttonLink}
                className="hero-button"
                size="lg"
              >
                {slide.buttonText}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
