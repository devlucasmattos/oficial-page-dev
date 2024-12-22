import React, { useRef } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { id: 1, title: 'Serviço A', description: 'Descrição do Serviço A', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Serviço B', description: 'Descrição do Serviço B', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Serviço C', description: 'Descrição do Serviço C', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Serviço D', description: 'Descrição do Serviço D', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Serviço E', description: 'Descrição do Serviço E', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Serviço F', description: 'Descrição do Serviço F', imageUrl: 'https://via.placeholder.com/150' },
    // Adicione mais itens aqui
  ];

  const carouselRef = useRef(null);

  // Função para rolar o carrossel para a direita
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Função para rolar o carrossel para a esquerda
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Catálogo de Serviços</h2>
      <div className="services-carousel-container">
        <button className="carousel-btn left" onClick={scrollLeft}>←</button>
        <div className="services-carousel" ref={carouselRef}>
          {services.map(service => (
            <div key={service.id} className="service-item">
              <img src="/images/imagem4.jpg" alt={service.title} className="service-image" />
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={scrollRight}>→</button>
      </div>
    </div>
  );
};

export default Services;
