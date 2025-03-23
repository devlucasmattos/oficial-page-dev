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
  ];

  const carouselRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useScrollAnimation('.services-container');

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleButtonClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="services-container animated">
      <h2 className="services-title">Serviços realizados</h2>
      <div className="services-carousel-container">
        <button className="carousel-btn left" onClick={scrollLeft}>←</button>
        <div className="services-carousel" ref={carouselRef}>
          {services.map(service => (
            <button 
              key={service.id} 
              className="service-item-button" 
              onClick={() => handleButtonClick(service.link)}
              onMouseEnter={() => setHoveredItem(service.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="service-item">
                {hoveredItem === service.id && (
                  <video 
                    src={service.videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    className="service-video overlay-video" 
                  />
                )}
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="service-image" 
                />
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <button className="carousel-btn right" onClick={scrollRight}>→</button>
      </div>
    </div>
  );
};

export default Services;
