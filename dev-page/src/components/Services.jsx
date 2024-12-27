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
    { id: 2, title: 'Serviço B', description: 'Descrição do Serviço B', imageUrl: './images/imagem1.jpg', videoUrl: './videos/video2.mp4', link: 'https://example.com/servicoB' },
    { id: 3, title: 'Serviço C', description: 'Descrição do Serviço C', imageUrl: './images/imagem2.jpg', videoUrl: './videos/video3.mp4', link: 'https://example.com/servicoC' },
    { id: 4, title: 'Serviço D', description: 'Descrição do Serviço D', imageUrl: './images/imagem3.jpg', videoUrl: './videos/video4.mp4', link: 'https://example.com/servicoD' },
    { id: 5, title: 'Serviço E', description: 'Descrição do Serviço E', imageUrl: './images/imagem4.jpg', videoUrl: './videos/video5.mp4', link: 'https://example.com/servicoE' },
    { id: 6, title: 'Serviço F', description: 'Descrição do Serviço F', imageUrl: './images/imagem5.jpg', videoUrl: './videos/video6.mp4', link: 'https://example.com/servicoF' },
    { id: 7, title: 'Serviço G', description: 'Descrição do Serviço G', imageUrl: './images/imagem6.jpg', videoUrl: './videos/video7.mp4', link: 'https://example.com/servicoG' },
    { id: 8, title: 'Serviço H', description: 'Descrição do Serviço H', imageUrl: './images/imagem7.jpg', videoUrl: './videos/video8.mp4', link: 'https://example.com/servicoH' },
    { id: 9, title: 'Serviço I', description: 'Descrição do Serviço I', imageUrl: './images/imagem8.jpg', videoUrl: './videos/video9.mp4', link: 'https://example.com/servicoI' },
    { id: 10, title: 'Serviço J', description: 'Descrição do Serviço J', imageUrl: './images/imagem9.jpg', videoUrl: './videos/video10.mp4', link: 'https://example.com/servicoJ' },
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
