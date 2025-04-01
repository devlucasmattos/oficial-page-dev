import React, { useRef, useState, useEffect } from 'react';
import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: 'Landing Page para Psicóloga', 
      description: 'Landing page personalizada para a psicóloga, focada na captação de pacientes, com informações sobre serviços, áreas de atuação e agendamento de consultas online. Design acolhedor e funcional.', 
      imageUrl: './images/projeto1.png', 
      videoUrl: './videos/2024-12-23 21-07-18.mp4', 
      link: 'https://psicologagabriellechemieski.com' 
    },
    { 
      id: 2, 
      title: 'Landing Page para Psicóloga', 
      description: 'Landing page personalizada para a psicóloga, focada na captação de pacientes, com informações sobre serviços, áreas de atuação e agendamento de consultas online. Design acolhedor e funcional.', 
      imageUrl: './images/projeto2.png', 
      videoUrl: './videos/2025-03-30-23-37-49.mp4', 
      link: 'https://magdamattospsico.com.br' 
    },
    { 
      id: 3, 
      title: 'Landing Page para Psicóloga', 
      description: 'Landing page personalizada para a psicóloga, focada na captação de pacientes, com informações sobre serviços, áreas de atuação e agendamento de consultas online. Design acolhedor e funcional.', 
      imageUrl: './images/projeto2.png', 
      videoUrl: './videos/2025-03-30-23-37-49.mp4', 
      link: 'https://magdamattospsico.com.br' 
    },
    { 
      id: 4, 
      title: 'Landing Page para Psicóloga', 
      description: 'Landing page personalizada para a psicóloga, focada na captação de pacientes, com informações sobre serviços, áreas de atuação e agendamento de consultas online. Design acolhedor e funcional.', 
      imageUrl: './images/projeto2.png', 
      videoUrl: './videos/2025-03-30-23-37-49.mp4', 
      link: 'https://magdamattospsico.com.br' 
    },
  ];

  const carouselRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(3);

  useScrollAnimation('.tech-services-container');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(Math.min(3, services.length));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [services.length]);

  const scrollRight = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.offsetWidth || 300;
      carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.offsetWidth || 300;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const handleButtonClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const showNavigation = services.length > visibleItems;

  return (
    <section id="servicos" className="tech-services-container animated" aria-labelledby="services-heading">
      <div className="tech-grid-lines"></div>
      <div className="container">
        <h2 className="tech-services-title animated" id="services-heading">
          <span className="tech-highlight">SERVIÇOS REALIZADOS</span>
        </h2>
        
        <div className="tech-services-carousel-container">
          {showNavigation && (
            <button className="tech-carousel-btn left" onClick={scrollLeft} aria-label="Rolar para esquerda">
              <span className="tech-carousel-icon">{"<"}</span>
            </button>
          )}
          
          <div 
            className="tech-services-carousel" 
            ref={carouselRef}
            style={{
              '--visible-items': visibleItems,
              justifyContent: services.length <= visibleItems ? 'center' : 'flex-start'
            }}
          >
            {services.map(service => (
              <div 
                key={service.id} 
                className="tech-service-item-wrapper animated"
                onMouseEnter={() => setHoveredItem(service.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button 
                  className="tech-service-item-button" 
                  onClick={() => handleButtonClick(service.link)}
                  aria-label={`Ver projeto ${service.title}`}
                >
                  <div className="tech-service-item">
                    <div className="tech-service-media-container">
                      {hoveredItem === service.id ? (
                        <video 
                          src={service.videoUrl} 
                          autoPlay 
                          loop 
                          muted 
                          className="tech-service-video" 
                        />
                      ) : (
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="tech-service-image" 
                        />
                      )}
                      <div className="tech-service-overlay"></div>
                    </div>
                    <div className="tech-service-info">
                      <h3 className="tech-service-title">{service.title}</h3>
                      <p className="tech-service-description">{service.description}</p>
                      <div className="tech-service-link">
                        <span className="tech-service-link-text">Ver Projeto</span>
                        <span className="tech-service-link-icon">{"</>"}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {showNavigation && (
            <button className="tech-carousel-btn right" onClick={scrollRight} aria-label="Rolar para direita">
              <span className="tech-carousel-icon">{">"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;