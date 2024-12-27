import './Header.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Header() {
  useScrollAnimation('.animated');

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="professional-name">Lucas Mattos</h1>
        <p className="professional animated">Desenvolvedor Full Stack</p>
        <p className="cta-phrase animated">Transforme suas ideias em soluções digitais eficientes. <br/>Vamos criar algo incrível juntos? 🚀</p>
        <a href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20or%C3%A7amento%20para%20a%20cria%C3%A7%C3%A3o%20de%20um%20site." 
           className="whatsapp-button animated" target="_blank" rel="noopener noreferrer"> <span>Entre em contato pelo WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
