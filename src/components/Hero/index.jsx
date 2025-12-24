'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/Button'; // Importação do componente Button
import { heroSlides } from '@/data/mockData';
import styles from './styles.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(curr => curr === heroSlides.length - 1 ? 0 : curr + 1);
  const prevSlide = () => setCurrentSlide(curr => curr === 0 ? heroSlides.length - 1 : curr - 1);

  const scrollToMenu = () => {
    const element = document.getElementById('cardapio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.overlay} />
          <img src={slide.image} alt={slide.alt} className={styles.bgImage} />
          
          <div className={styles.content}>
             <span className={styles.welcomeBadge}>Desde 2005 na Lapa</span>
             <h1 className={styles.title}>{slide.title}</h1>
             <p className={styles.subtitle}>{slide.subtitle}</p>
             <div className={styles.actions}>
                <Button 
                  onClick={scrollToMenu} 
                  className={styles.heroBtn}
                >
                  Ver Cardápio
                </Button>
             </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className={`${styles.control} ${styles.prev}`}>
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className={`${styles.control} ${styles.next}`}>
        <ChevronRight size={32} />
      </button>
    </section>
  );
}