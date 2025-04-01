import { useEffect } from "react";
import './Contact.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"; 
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  useScrollAnimation('.tech-contact-container');

  return (
    <section className="tech-contact-container animated" id="contato" aria-labelledby="contact-heading">
      <div className="tech-grid-lines"></div>
      <div className="container">
        <h2 className="tech-contact-title animated" id="contact-heading">
          <span className="tech-highlight">VAMOS FAZER ACONTECER!</span>
        </h2>
        <p className="tech-contact-text animated">
          Estou pronto para ajudar a levar seu projeto para o <strong className="tech-accent">próximo nível</strong>!<br /> 
          Entre em contato através das minhas redes sociais<br /> 
          ou agende uma consultoria. ⤵️
        </p>

        <div className="tech-social-icons animated">
          <a href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20or%C3%A7amento%20para%20a%20cria%C3%A7%C3%A3o%20de%20um%20site." 
             className="tech-social-icon tech-whatsapp" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="WhatsApp">
            <div className="tech-social-icon-bg"></div>
            <FaWhatsapp className="tech-social-icon-inner" />
            <span className="tech-social-hover">WhatsApp</span>
            <div className="tech-social-ripple"></div>
          </a>
          
          <a href="https://www.linkedin.com/in/devlucasmattos/" 
             className="tech-social-icon tech-linkedin" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="LinkedIn">
            <div className="tech-social-icon-bg"></div>
            <FaLinkedin className="tech-social-icon-inner" />
            <span className="tech-social-hover">LinkedIn</span>
            <div className="tech-social-ripple"></div>
          </a>
          
          <a href="https://github.com/devlucasmattos" 
             className="tech-social-icon tech-github" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="GitHub">
            <div className="tech-social-icon-bg"></div>
            <FaGithub className="tech-social-icon-inner" />
            <span className="tech-social-hover">GitHub</span>
            <div className="tech-social-ripple"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;