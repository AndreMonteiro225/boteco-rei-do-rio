// Extração dos dados para manter os componentes limpos
export const LOGO_URL = "/rei_do_rio.jpg";
export const HERO_IMAGE_URL = "/hero_rei_rio.png";

export const heroSlides = [
  {
    id: 1,
    image: HERO_IMAGE_URL,
    title: "O Verdadeiro Sabor Carioca",
    subtitle: "Tradição, cerveja gelada e a melhor comida de boteco da região.",
    alt: "Interior do Boteco Rei do Rio"
  },
  {
    id: 2,
    image: "/hero2_rei_rio.png",
    title: "Happy Hour de Respeito",
    subtitle: "Chame os amigos e venha curtir nosso ambiente climatizado.",
    alt: "Grupo de amigos no happy hour"
  },
  {
    id: 3,
    image: HERO_IMAGE_URL,
    title: "Feijoada Completa",
    subtitle: "Todo sábado, aquela feijoada que você respeita com samba ao vivo.",
    alt: "Prato de feijoada completa"
  }
];

export const menuItems = {
  comidas: [
    { id: 1, name: "Bolinho de Bacalhau", description: "Crocante por fora, macio por dentro. Porção com 6 unidades.", price: "R$ 32,00", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=300" },
    { id: 2, name: "Carne de Sol com Aipim", description: "Carne de sol acebolada servida com aipim frito na manteiga.", price: "R$ 58,00", image: "https://images.unsplash.com/photo-1599321955726-90048ea69d87?auto=format&fit=crop&q=80&w=300" },
    { id: 3, name: "Frango a Passarinho", description: "Com muito alho torrado e salsinha.", price: "R$ 42,00", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=300" },
    { id: 4, name: "Torresmo de Rolo", description: "Panceta suína crocante e suculenta.", price: "R$ 45,00", image: "https://images.unsplash.com/photo-1662496799402-23c2d43a1391?auto=format&fit=crop&q=80&w=300" },
  ],
  bebidas: [
    { id: 5, name: "Caipirinha Clássica", description: "Limão, açúcar e cachaça artesanal.", price: "R$ 22,00", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300" },
    { id: 6, name: "Chopp Gelado (Tulipa)", description: "O mais gelado da cidade. 300ml.", price: "R$ 9,50", image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&q=80&w=300" },
    { id: 7, name: "Gin Tônica Tropical", description: "Gin, tônica, especiarias e frutas da estação.", price: "R$ 32,00", image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=300" },
    { id: 8, name: "Refrigerante Lata", description: "Coca-cola, Guaraná, Sprite.", price: "R$ 7,00", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300" },
  ]
};

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Boteco Rei do Rio",
  "priceRange": "$$",
  "servesCuisine": "Brasileira",
  "telephone": "+55-21-99999-9999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua da Boemia, 123",
    "addressLocality": "Lapa",
    "addressRegion": "RJ"
  }
};