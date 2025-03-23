import React, { useEffect } from 'react';
import './Links.css';
import { FaWhatsapp, FaGlobe, FaGithub } from "react-icons/fa"; 

function Links() {
  useEffect(() => {
    document.body.classList.add('links-page');
    return () => {
      document.body.classList.remove('links-page');
    };
  }, []);

  return (
    <div className="links-container">
      <div className="links-header">
        <h1>Lucas Mattos</h1>
        <p>Desenvolvedor de sistemas</p>
      </div>
      <div className="links-content">
        <a href="https://wa.me/+5553991244320?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20or%C3%A7amento%20para%20a%20cria%C3%A7%C3%A3o%20de%20um%20site." className="link-btn">
          <FaWhatsapp className="icon" /> 
          Faça seu orçamento!
        </a>
        <a href="https://devlucasmattos.com/" className="link-btn">
          <FaGlobe className="icon" /> 
          Portifólio
        </a>
        <a href="https://github.com/devlucasmattos" className="link-btn">
          <FaGithub className="icon" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Links;
