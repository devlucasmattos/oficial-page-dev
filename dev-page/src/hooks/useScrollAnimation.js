import { useEffect } from 'react';

const useScrollAnimation = (elementSelector = '#contato') => { // Default para #contato
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 }); // 50% do elemento visível

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element); // Limpar a observação ao desmontar
      });
    };
  }, [elementSelector]);
};

export default useScrollAnimation;
