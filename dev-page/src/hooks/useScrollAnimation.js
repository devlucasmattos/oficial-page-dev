import { useEffect } from 'react';

const useScrollAnimation = (elementSelector = '#contato') => { 
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.20 }); // 20% do elemento visível

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element); 
      });
    };
  }, [elementSelector]);
};

export default useScrollAnimation;
