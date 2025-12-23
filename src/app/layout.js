import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import { schemaData, HERO_IMAGE_URL } from '@/data/mockData';

// Configuração de Fontes Otimizadas
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const merriweather = Merriweather({ 
  weight: ['400', '700', '900'], 
  subsets: ['latin'], 
  variable: '--font-serif' 
});

// Metadados Estáticos (Substitui React Helmet)
export const metadata = {
  title: 'Boteco Rei do Rio | O Melhor da Lapa',
  description: 'Venha viver a tradição carioca na Lapa! Feijoada completa, samba e chopp gelado.',
  keywords: ['boteco lapa', 'feijoada rj', 'happy hour', 'bar rj'],
  openGraph: {
    title: 'Boteco Rei do Rio',
    description: 'Feijoada, Samba e Cerveja Gelada no coração da Lapa.',
    images: [{ url: HERO_IMAGE_URL }],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Schema.org JSON-LD injetado de forma segura */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}