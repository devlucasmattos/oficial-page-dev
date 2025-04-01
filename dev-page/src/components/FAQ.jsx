import { useState, useEffect, useRef } from 'react';
import './FAQ.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQ = () => {
    useScrollAnimation('.animated');
    const [activeTab, setActiveTab] = useState(null);
    const faqRef = useRef(null);

    const questions = [
        {
            question: "Quanto tempo leva para desenvolver um site?",
            answer: "Desenvolvemos sites institucionais em até 10 dias úteis. Projetos mais complexos como e-commerces podem levar de 2-3 semanas, com entregas parceladas.",
            tech: ["</> Prazos ágeis", "</> Entregas parceladas"],
            tooltips: {
                "entregas parceladas": "Dividimos o projeto em etapas com entregas parciais para seu acompanhamento"
            }
        },
        {
            question: "Qual o formato de pagamento?",
            answer: "Aceitamos PIX, dinheiro ou cartão (em até 5x sem juros). O pagamento é dividido em: 50% para iniciar o desenvolvimento e 50% na entrega final.",
            tech: ["</> Flexibilidade", "</> Parcelamento"]
        },
        {
            question: "Como é o processo de criação?",
            answer: "Nosso fluxo de trabalho:",
            process: [
                { step: "1", title: "Briefing", description: "Análise detalhada das necessidades" },
                { step: "2", title: "Protótipo", description: "Layout navegável para aprovação" },
                { step: "3", title: "Desenvolvimento", description: "Codificação em etapas" },
                { step: "4", title: "Revisões", description: "Ajustes finais" },
                { step: "5", title: "Entrega", description: "Treinamento e publicação" }
            ],
            tech: ["</> Metodologia Ágil", "</> Transparência"]
        },
        {
            question: "Quais tecnologias você utiliza?",
            answer: "Trabalhamos com as melhores tecnologias do mercado:",
            techList: [
                { name: "React", type: "Front-end" },
                { name: "Tailwind CSS", type: "Front-end" },
                { name: "Node.js", type: "Back-end" },
                { name: "MongoDB", type: "Banco de dados" }
            ],
            tech: ["</> Stack Moderna", "</> Performance"]
        },
        {
            question: "Você faz sites responsivos para mobile?",
            answer: "Sim, todos nossos projetos são desenvolvidos com abordagem Mobile-First, garantindo perfeita adaptação em qualquer dispositivo.",
            tech: ["</> Mobile-First", "</> Design Responsivo"],
            tooltips: {
                "Mobile-First": "Desenvolvimento iniciado pela versão mobile para melhor experiência"
            }
        }
    ];

    const handleTabClick = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (faqRef.current && !faqRef.current.contains(event.target)) {
                setActiveTab(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderWithTooltips = (text, tooltips) => {
        if (!tooltips) return text;
        
        return text.split(' ').map((word, i) => {
            const lowerWord = word.toLowerCase().replace(/[.,]/g, '');
            return tooltips[lowerWord] ? (
                <span key={i} className="tooltip-container">
                    {word}
                    <span className="tooltip">{tooltips[lowerWord]}</span>
                </span>
            ) : (
                word + ' '
            );
        });
    };

    return (
        <section id="faq" className="faq-tech" aria-labelledby="faq-heading" ref={faqRef}>
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
                                <p className="tech-text">
                                    {item.tooltips 
                                        ? renderWithTooltips(item.answer, item.tooltips)
                                        : item.answer
                                    }
                                </p>

                                {item.process && (
                                    <div className="process-timeline">
                                        {item.process.map((step, i) => (
                                            <div key={i} className="process-step">
                                                <div className="step-number">{step.step}</div>
                                                <div className="step-content">
                                                    <h4>{step.title}</h4>
                                                    <p>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.techList && (
                                    <div className="tech-list">
                                        {item.techList.map((tech, i) => (
                                            <div key={i} className="tech-item">
                                                <span className="tech-name">{tech.name}</span>
                                                <span className="tech-type">{tech.type}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

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