import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaArrowRight, FaGamepad } from 'react-icons/fa';
import '../styles/CategoryCard.css';

export default function CategoryCard({ category }){
  return (
    <Card className="category-card">
      <div className="category-card-overlay"></div>
      <Card.Body className="category-card-body">
        <div className="category-icon-wrapper">
          <FaGamepad className="category-icon" />
        </div>
        <Card.Title className="category-title">{category.name}</Card.Title>
        <Button 
          as={Link} 
          to={`/categorias/${category.id}`}
          className="category-button"
        >
          Explorar
          <FaArrowRight className="ms-2 arrow-icon" />
        </Button>
      </Card.Body>
      <div className="category-glow"></div>
    </Card>
  );
}