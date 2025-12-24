'use client';

import { useState } from 'react';
import { ChefHat, Beer, ChevronRight } from 'lucide-react';
import { menuItems } from '@/data/mockData'; // Refatorado para usar @
import styles from './styles.module.css';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('comidas');

  return (
    <section id="cardapio" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Nosso Cardápio</h2>
          <div className={styles.divider}></div>
          <p>Feito com alma e servido no ponto certo.</p>
        </div>

        <div className={styles.tabs}>
          <button 
            onClick={() => setActiveTab('comidas')}
            className={`${styles.tabBtn} ${activeTab === 'comidas' ? styles.active : ''}`}
          >
            <ChefHat size={20} /> Comidas
          </button>
          <button 
            onClick={() => setActiveTab('bebidas')}
            className={`${styles.tabBtn} ${activeTab === 'bebidas' ? styles.active : ''}`}
          >
            <Beer size={20} /> Bebidas
          </button>
        </div>

        <div className={styles.grid}>
          {menuItems[activeTab].map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <h3>{item.name}</h3>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <button className={styles.addBtn}>
                    Adicionar <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}