import { useEffect } from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    useScrollAnimation('.animated');

    return (
        <section id="sobre" className="sobre" aria-labelledby="about-heading">
            <div className="tech-grid-lines"></div>
            <div className="container about-container">
                <div className="profile-image-container animated">
                    <div className="tech-frame">
                        <img 
                            src="/images/profile-dev.png" 
                            alt="Lucas Mattos - Desenvolvedor Full Stack" 
                            className="profile-image" 
                            width="400"
                            height="400"
                            loading="lazy"
                        />
                        <div className="tech-border-animation"></div>
                    </div>
                </div>
                <div className="text-content">
                    <h2 className="animated" id="about-heading">
                        <span className="tech-highlight">QUEM SOU EU?</span>
                    </h2>
                    <div className="about-content animated">
                        <p className="tech-text">
                            Olá, eu sou <strong className="tech-accent">Lucas Mattos</strong>, Desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas com especialização em soluções de alta performance.
                        </p>
                        <p className="tech-text">
                            Com experiência em projetos complexos, crio sistemas <strong className="tech-accent">otimizados, escaláveis e acessíveis</strong> que resolvem problemas reais e impulsionam negócios.
                        </p>
                        <div className="skills-highlight tech-card">
                            <h3 className="tech-subtitle">MINHAS ESPECIALIDADES:</h3>
                            <ul className="skills-list">
                                <li className="tech-skill-item">
                                    <span className="tech-bullet">{"</>"}</span> 
                                    <span>Front-end Moderno (React/Next.js)</span>
                                </li>
                                <li className="tech-skill-item">
                                    <span className="tech-bullet">{"</>"}</span>
                                    <span>Back-end Robustos (Node.js/APIs)</span>
                                </li>
                                <li className="tech-skill-item">
                                    <span className="tech-bullet">{"</>"}</span>
                                    <span>Arquitetura de Sistemas</span>
                                </li>
                                <li className="tech-skill-item">
                                    <span className="tech-bullet">{"</>"}</span>
                                    <span>Otimização de Performance</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tech-cta">
                            <p className="cta-text">
                                Pronto para levar seu projeto ao próximo nível?
                            </p>
                            <a href="#contato" className="tech-button">
                                <span className="button-icon">{"</>"}</span>
                                <span>CONVERSE COMIGO</span>
                                <span className="button-pulse"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;