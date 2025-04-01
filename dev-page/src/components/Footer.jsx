import './Footer.css';

function Footer() {
  return (
    <footer className="tech-footer">
      <div className="tech-grid-lines"></div>
      <div className="container">
        <p className="tech-footer-text">
          &copy; 2024 <span className="tech-accent">Lucas Mattos</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;