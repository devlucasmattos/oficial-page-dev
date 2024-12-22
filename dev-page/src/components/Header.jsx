import './Header.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Header() {
  useScrollAnimation('.animated');

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="professional-name animated">Lucas Mattos</h1>
        <p className="professional-crp animated">Desenvolvedor Full Stack</p>
        <p className="cta-phrase animated">Transforme suas ideias em soluções digitais eficientes. <br/>Vamos criar algo incrível juntos? 🚀</p>
        <a href="https://wa.me/message/3YQT5VMFXFKHI1" 
           className="whatsapp-button animated" target="_blank" rel="noopener noreferrer"> <span>Entre em contato pelo WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
