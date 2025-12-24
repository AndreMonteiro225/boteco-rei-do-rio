'use client'; 

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { LOGO_URL } from '@/data/mockData'; // Refatorado para usar @
import styles from './styles.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navWrapper}>
          
          <div className={styles.logoArea}>
            <div className={styles.logoCircle}>
              <img src={LOGO_URL} alt="Logo" className={styles.logoImg} />
            </div>
            <span className={styles.brandName}>Boteco Rei do Rio</span>
          </div>

          <nav className={styles.desktopNav}>
            {['inicio', 'cardapio', 'espaco', 'contato'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className={styles.navLink}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {['inicio', 'cardapio', 'espaco', 'contato'].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className={styles.mobileNavLink}>
               {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}