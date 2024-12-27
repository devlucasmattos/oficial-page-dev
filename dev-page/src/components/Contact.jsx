import { useEffect, useState } from "react";
import './Contact.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"; 
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const isVisible = useScrollAnimation();

  return (
    <section 
      className={`contact ${isVisible ? "visible" : ""}`} 
      id="contato"
    >
      <h2 className={`contact ${isVisible ? "visible" : ""}`} id="contato">
        Vamos fazer acontecer!
      </h2>
      <p>
        Estou pronto para ajudar a levar seu projeto para o próximo nível!<br /> 
        Entre em contato através das minhas redes sociais<br /> 
        ou agende uma consultoria. ⤵️
      </p>

      <div className="social-icons">
        <a href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20or%C3%A7amento%20para%20a%20cria%C3%A7%C3%A3o%20de%20um%20site." className="social-icon whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/devlucasmattos/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/devlucasmattos" className="social-icon github" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;
