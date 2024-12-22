import { useEffect } from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';  // Importando o hook

const About = () => {

    useScrollAnimation('.animated');

    return (
        <section id="sobre" className="sobre">
            <div className="container">
                {/* Imagem acima da seção */}
                <div className="image-container">
                    <img src="/lucas-mattos.jpg" alt="Lucas Mattos" className="profile-image animated" />
                </div>

                <h2 className="animated"><span>Quem sou eu?</span></h2>
                <p className="animated">
                    Olá, sou Lucas Mattos, desenvolvedor de sistemas formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela Faculdade Unicesumar.<br /> <br />
                    Com experiência em desenvolvimento web, busco sempre criar soluções inovadoras, funcionais e personalizadas para atender às necessidades dos meus clientes.<br /> <br />
                    Se você está procurando um profissional para criar ou melhorar seu site, estou aqui para ajudar a transformar suas ideias em realidade!<br /> <br />
                    Vamos conversar e desenvolver algo incrível para o seu negócio.
                </p>
            </div>
        </section>
    );
};

export default About;
