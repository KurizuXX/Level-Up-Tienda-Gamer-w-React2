import { Container, Badge } from 'react-bootstrap';
import './PromoBanner.css';

export default function PromoBanner({ 
  icon: Icon, 
  title, 
  subtitle, 
  badges = [],
  gradientColors = ['#1a0000', '#0d0d0d', '#001a1a']
}) {
  return (
    <div 
      className="promo-banner"
      style={{
        background: `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%, ${gradientColors[2]} 100%)`
      }}
    >
      <Container>
        <div className="promo-banner-content">
          {Icon && (
            <div className="promo-icon-wrapper">
              <Icon className="promo-icon" />
            </div>
          )}
          
          <h1 className="promo-title">{title}</h1>
          
          {subtitle && (
            <p className="promo-subtitle">{subtitle}</p>
          )}
          
          {badges.length > 0 && (
            <div className="promo-badges">
              {badges.map((badge, index) => (
                <Badge 
                  key={index}
                  bg={badge.bg || 'primary'}
                  text={badge.text}
                  className="promo-badge"
                >
                  {badge.icon && <badge.icon className="me-2" />}
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
