import { useEffect, useState } from "react";
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Importando o hook

function Contact() {
  // Usando o hook para detectar se a seção está visível
  const isVisible = useScrollAnimation();

  return (
    <section 
      className={`contact ${isVisible ? "visible" : ""}`} 
      id="contato"
    >
      <h2>Vamos fazer acontecer!</h2>
      <p>Estou pronto para ajudar a levar seu projeto para o próximo nível!<br /> Entre em contato através das minhas redes sociais<br /> ou agende uma consultoria. ⤵️</p>

      <div className="social-icons">
        <a href="https://wa.me/message/3YQT5VMFXFKHI1" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> {/* Ícone do WhatsApp */}
        </a>
        <a href="https://www.linkedin.com/in/lucasmattos" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {/* Ícone do LinkedIn */}
        </a>
        <a href="https://github.com/lucasmattos" className="social-icon github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* Ícone do GitHub */}
        </a>
      </div>
    </section>
  );
}

export default Contact;
