import { useEffect } from 'react';
import './Header.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Header() {
  useScrollAnimation('.animated');

  return (
    <header className="header-tech" role="banner">
      <div className="tech-grid-lines"></div>
      <div className="header-content">
        <h1 className="professional-name-tech animated">
          <span className="tech-highlight">LUCAS MATTOS</span>
        </h1>
        <p className="professional-title-tech animated">
          <span className="tech-accent">DESENVOLVEDOR FULL STACK</span>
        </p>
        <p className="cta-phrase-tech animated">
          Transforme suas ideias em soluções digitais <strong className="tech-accent">eficientes</strong>.
          <span className="cta-line-break">Vamos criar algo <strong className="tech-accent">incrível</strong> juntos? 🚀</span>
        </p>
        <div className="tech-cta animated">
          <a 
            href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20web." 
            className="tech-button"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Entre em contato pelo WhatsApp"
          >
            <span className="button-icon">{"</>"}</span>
            <span>ENTRE EM CONTATO</span>
            <span className="button-pulse"></span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;