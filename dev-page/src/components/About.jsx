import { useEffect } from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    useScrollAnimation('.animated');

    return (
        <section id="sobre" className="sobre">
            <div className="container about-container">
                <div className="text-content">
                    <h2 className="animated"><span>Quem sou eu?</span></h2>
                    <div className="profile-image-container">
                        <img src="/images/profile-dev.png" alt="Perfil" className="profile-image" />
                    </div>
                    <p className="animated">
                        Olá, sou Lucas Mattos, desenvolvedor de sistemas formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela Faculdade Unicesumar.<br /><br />
                        Com experiência em desenvolvimento web, busco sempre criar soluções inovadoras, funcionais e personalizadas para atender às necessidades dos meus clientes.<br /><br />
                        Se você está procurando um profissional para criar ou melhorar seu site, estou aqui para ajudar a transformar suas ideias em realidade!<br /><br />
                        Vamos conversar e desenvolver algo incrível para o seu negócio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
