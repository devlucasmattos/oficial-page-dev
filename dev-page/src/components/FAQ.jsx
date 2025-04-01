import { useState, useEffect } from 'react';
import './FAQ.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQ = () => {
    useScrollAnimation('.animated');
    const [activeTab, setActiveTab] = useState(0);

    const questions = [
        {
            question: "Quanto tempo leva para desenvolver um site?",
            answer: "O tempo varia conforme a complexidade. Sites institucionais simples levam 2-3 semanas, enquanto sistemas web completos podem levar 2-4 meses. Após análise do projeto, forneço um cronograma detalhado.",
            tech: ["</> Prazos ágeis", "</> Entregas parceladas"]
        },
        {
            question: "Você faz sites responsivos para mobile?",
            answer: "Sim, todos meus projetos são desenvolvidos com Mobile-First approach, garantindo perfeita adaptação em smartphones, tablets e desktops. Utilizo técnicas avançadas de CSS Grid e Flexbox.",
            tech: ["</> Mobile-First", "</> Design Responsivo"]
        },
        {
            question: "Como é o processo de criação?",
            answer: "1) Briefing detalhado - 2) Protótipo navegável - 3) Desenvolvimento em etapas - 4) Revisões e ajustes - 5) Treinamento e entrega. Você acompanha cada fase através de demonstrações online.",
            tech: ["</> Metodologia Ágil", "</> Transparência"]
        },
        {
            question: "Quais tecnologias você utiliza?",
            answer: "Front-end: React, Next.js, TailwindCSS. Back-end: Node.js, Express, MongoDB. Para performance: Webpack, Lighthouse. Sempre atualizado com as melhores práticas do mercado.",
            tech: ["</> Stack Moderna", "</> Performance Otimizada"]
        },
        {
            question: "Você oferece manutenção após o lançamento?",
            answer: "Sim, ofereço pacotes de manutenção mensal que incluem atualizações de segurança, backups, otimizações e suporte técnico rápido. Garantindo que seu site permaneça sempre funcional e atualizado.",
            tech: ["</> Suporte Contínuo", "</> Atualizações"]
        }
    ];

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? null : index);
    };

    return (
        <section id="faq" className="faq-tech" aria-labelledby="faq-heading">
            <div className="tech-grid-lines"></div>
            <div className="container faq-container">
                <h2 className="animated" id="faq-heading">
                    <span className="tech-highlight">PERGUNTAS FREQUENTES</span>
                </h2>
                
                <div className="faq-tabs animated">
                    {questions.map((item, index) => (
                        <div 
                            key={index} 
                            className={`faq-tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className="faq-tab-header">
                                <h3 className="tech-subtitle">
                                    <span className="tech-bullet">{"</>"}</span>
                                    {item.question}
                                </h3>
                                <span className="faq-tab-indicator">
                                    {activeTab === index ? '−' : '+'}
                                </span>
                            </div>
                            
                            <div className="faq-tab-content">
                                <p className="tech-text">{item.answer}</p>
                                <div className="faq-tech-highlights">
                                    {item.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tech-cta animated">
                    <p className="cta-text">
                        Sua dúvida não está aqui?
                    </p>
                    <a href="#contato" className="tech-button">
                        <span className="button-icon">{"</>"}</span>
                        <span>FALE DIRETO COMIGO</span>
                        <span className="button-pulse"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;