import { LOGO_URL } from '@/data/mockData';
import styles from './styles.module.css';

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Coluna 1: Marca e Sobre */}
          <div className={styles.brandColumn}>
            <div className={styles.logoHeader}>
               <div className={styles.logoCircle}>
                  <img src={LOGO_URL} alt="Logo Rodapé" className={styles.logoImg} />
               </div>
               <span className={styles.brandName}>Rei do Rio</span>
            </div>
            <p className={styles.aboutText}>
              O ponto de encontro oficial de quem ama o Rio, boa comida e aquela cerveja trincando. Desde 2005 fazendo história na Lapa.
            </p>
          </div>
          
          {/* Coluna 2: Horários */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Horários</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span>Ter - Qui</span> <span className={styles.highlight}>17h - 00h</span>
              </li>
              <li className={styles.listItem}>
                <span>Sex - Sáb</span> <span className={styles.highlight}>17h - 03h</span>
              </li>
              <li className={styles.listItem}>
                <span>Domingo</span> <span className={styles.highlight}>12h - 22h</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Links Rápidos</h4>
            <ul className={styles.list}>
              <li><button onClick={() => scrollTo('hero')} className={styles.linkButton}>Início</button></li>
              <li><button onClick={() => scrollTo('cardapio')} className={styles.linkButton}>Cardápio</button></li>
              <li><button onClick={() => scrollTo('contato')} className={styles.linkButton}>Fale Conosco</button></li>
            </ul>
          </div>
        </div>
        
        {/* Rodapé Inferior */}
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Boteco Rei do Rio. Todos os direitos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacidade</a>
            <a href="#" className={styles.legalLink}>Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}