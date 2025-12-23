"use client";
import Header from "../components/Header/index.jsx";
import Hero from "../components/Hero/index.jsx";
import Menu from "../components/Menu/index.jsx";
import Footer from "../components/Footer/index.jsx";
import { MapPin, Phone, Instagram, Navigation } from "lucide-react";
import styles from "./page.module.css";

// Componentes simples podem ficar inline ou em /UI se forem reutilizáveis
const SectionTitle = ({ title, subtitle }) => (
  <div className={styles.sectionTitleWrapper}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.divider}></div>
    {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
  </div>
);

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero />

      <Menu />

      {/* Seção Espaço (Conteúdo Estático - Server Side Rendered) */}
      <section id="espaco" className={styles.spaceSection}>
        <div className="container">
          <div className={styles.spaceContent}>
            <div className={styles.spaceText}>
              <span className={styles.tagline}>O Ambiente</span>
              <h2>Sinta-se em casa, fora de casa.</h2>
              <p>O Boteco Rei do Rio foi pensado para ser o seu refúgio...</p>
              <ul className={styles.featureList}>
                <li>Área externa arborizada</li>
                <li>Telões para jogos</li>
                <li>Espaço Kids</li>
              </ul>
            </div>
            {/* Galeria Simplificada para demonstração */}
            <div className={styles.galleryGrid}>
              {/* Imagens iriam aqui */}
              <div className={styles.galleryPlaceholder}>Galeria de Fotos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato (Conteúdo Estático) */}
      <section id="contato" className={styles.contactSection}>
        <div className="container">
          <SectionTitle title="Vem pro Rei" subtitle="Estamos te esperando." />

          <div className={styles.contactGrid}>
            <address className={styles.addressBlock}>
              <h3>Canais de Atendimento</h3>
              <div className={styles.contactItem}>
                <div className={`${styles.iconBox} ${styles.greenIcon}`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>WhatsApp & Reservas</h4>
                  <p>(21) 99999-9999</p>
                </div>
              </div>
              {/* Outros itens de contato... */}
            </address>

            <div className={styles.mapBlock}>
              <h3>Nossa Localização</h3>
              <div className={styles.mapPlaceholder}>
                <MapPin className={styles.mapIcon} />
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9050238943682!2d-46.68154062467066!3d-23.535918178817344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57f00d793931%3A0x5af0ce100fa2d912!2sBoteco%20Rei%20do%20Rio!5e0!3m2!1spt-BR!2sbr!4v1766499816427!5m2!1spt-BR!2sbr"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
