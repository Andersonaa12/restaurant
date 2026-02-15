export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badges: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

export interface LocationInfo {
  address: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  googleMapsEmbed: string;
  lat: number;
  lng: number;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  heroImage: string;
  colors: {
    primary: string;
    accent: string;
    backgroundLight: string;
    textLight: string;
    backgroundDark: string;
    textDark: string;
  };
  menu: {
    categories: string[];
    items: MenuItem[];
  };
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  about: {
    title: string;
    story: string;
    image: string;
  };
  location: LocationInfo;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export const restaurantConfig: RestaurantConfig = {
  name: "Brasas & Leños",
  tagline: "El sabor del fuego en cada corte",
  subtitle: "Parrilla & Asados • 2026",
  description: "Especialistas en carnes asadas al carbón y leña. Los mejores cortes premium, jugosos y con ese toque ahumado inconfundible. Un lugar para disfrutar en familia o con amigos, donde la parrilla es la protagonista.",
  heroImage: "https://picsum.photos/id/106/2000/1200", // Imagen de parrilla con carnes
  colors: {
    primary: "#B22222",     // Rojo fuego / brasas
    accent: "#FFD700",      // Dorado intenso
    backgroundLight: "#FFF8F0",
    textLight: "#333333",
    backgroundDark: "#1A0F0A", // Negro ahumado
    textDark: "#F5E8C7",
  },
  
  menu: {
    categories: ["Entradas", "Cortes Premium", "Parrillas Combinadas", "Acompañamientos", "Postres", "Bebidas"],
    items: [
      // Entradas
      { id: 1, category: "Entradas", name: "Chinchulines", description: "Crujientes chinchulines de res a la parrilla con chimichurri fresco", price: 18, image: "https://picsum.photos/id/431/600/400", badges: [] },
      { id: 2, category: "Entradas", name: "Morcilla Artesanal", description: "Morcilla casera asada con cebolla caramelizada", price: 16, image: "https://picsum.photos/id/292/600/400", badges: [] },
      { id: 3, category: "Entradas", name: "Provoleta al Horno", description: "Queso provolone fundido con orégano y toque de ají", price: 20, image: "https://picsum.photos/id/201/600/400", badges: ["vegetariano"] },
      
      // Cortes Premium
      { id: 4, category: "Cortes Premium", name: "Bife de Chorizo", description: "400 g del corte más jugoso, término a elección", price: 48, image: "https://picsum.photos/id/106/600/400", badges: [] },
      { id: 5, category: "Cortes Premium", name: "Entraña", description: "350 g tierna y llena de sabor, parrilla al carbón", price: 52, image: "https://picsum.photos/id/870/600/400", badges: [] },
      { id: 6, category: "Cortes Premium", name: "Lomo Fino", description: "300 g el corte más suave, con salsa de hongos opcional", price: 58, image: "https://picsum.photos/id/1060/600/400", badges: [] },
      
      // Parrillas Combinadas
      { id: 7, category: "Parrillas Combinadas", name: "Parrilla para 2", description: "Mix de bife, chorizo, morcilla, chinchulines y costilla corta", price: 89, image: "https://picsum.photos/id/1015/600/400", badges: [] },
      { id: 8, category: "Parrillas Combinadas", name: "Parrilla Mixta Familiar", description: "Para 4-5 personas: variedad de cortes, chorizos y guarniciones", price: 165, image: "https://picsum.photos/id/292/600/400", badges: [] },
      
      // Acompañamientos
      { id: 9, category: "Acompañamientos", name: "Papas a la Provenzal", description: "Papas fritas con ajo y perejil fresco", price: 12, image: "https://picsum.photos/id/431/600/400", badges: ["vegetariano"] },
      { id: 10, category: "Acompañamientos", name: "Ensalada Mixta", description: "Lechuga, tomate, cebolla y aderezo de la casa", price: 10, image: "https://picsum.photos/id/201/600/400", badges: ["vegetariano"] },
      
      // Postres
      { id: 11, category: "Postres", name: "Flan con Dulce de Leche", description: "Clásico flan casero bañado en dulce de leche", price: 14, image: "https://picsum.photos/id/1080/600/400", badges: [] },
      { id: 12, category: "Postres", name: "Quesillo con Miel", description: "Queso fresco con miel de caña y nueces", price: 13, image: "https://picsum.photos/id/870/600/400", badges: [] },
      
      // Bebidas
      { id: 13, category: "Bebidas", name: "Malbec de la Casa", description: "Copa de malbec argentino perfecto para carnes", price: 18, image: "https://picsum.photos/id/201/600/400", badges: ["tinto"] },
      { id: 14, category: "Bebidas", name: "Cerveza Artesanal", description: "IPA o Lager bien fría", price: 12, image: "https://picsum.photos/id/1060/600/400", badges: [] },
    ],
  },
  testimonials: [
    { name: "Juan Carlos M.", role: "Amante de la parrilla", text: "Los mejores cortes que he probado en mucho tiempo. La parrilla para 2 es espectacular, todo jugoso y con punto perfecto.", image: "https://picsum.photos/id/64/128/128", rating: 5 },
    { name: "María López", role: "Cliente frecuente", text: "Ambiente familiar, atención excelente y las carnes son de otro nivel. Volvemos cada mes sin falta.", image: "https://picsum.photos/id/91/128/128", rating: 5 },
    { name: "Pedro Ramírez", role: "Foodie local", text: "El sabor a leña y carbón es inigualable. Recomiendo 100% la entraña y la provoleta.", image: "https://picsum.photos/id/1005/128/128", rating: 5 },
  ],
  gallery: [
    { url: "https://picsum.photos/id/106/800/600", alt: "Parrilla", caption: "Cortes en la parrilla al carbón" },
    { url: "https://picsum.photos/id/870/800/600", alt: "Carne", caption: "Bife de chorizo jugoso" },
    { url: "https://picsum.photos/id/1015/800/600", alt: "Mesa", caption: "Parrilla combinada para compartir" },
    { url: "https://picsum.photos/id/292/800/600", alt: "Ambiente", caption: "Ambiente cálido y familiar" },
    { url: "https://picsum.photos/id/431/800/600", alt: "Chinchulines", caption: "Entradas a la parrilla" },
    { url: "https://picsum.photos/id/201/800/600", alt: "Postre", caption: "Flan con dulce de leche" },
  ],
  about: {
    title: "Nuestra pasión por el fuego",
    story: "Desde 2022, Brasas & Leños es el lugar donde el arte de la parrilla se vive con pasión. Nos dedicamos a seleccionar los mejores cortes, encender el carbón y leña en el punto exacto para que cada bocado tenga ese sabor ahumado y auténtico que solo el fuego puede dar. Ven y vive la experiencia.",
    image: "https://picsum.photos/id/106/800/600",
  },
  location: {
    address: "Calle Principal 45, Zona Norte, Ciudad",
    phone: "+57 300 123 4567",
    email: "info@brasasyleños.com",
    hours: {
      "Lunes": "12:00 – 22:00",
      "Martes": "12:00 – 22:00",
      "Miércoles": "12:00 – 22:00",
      "Jueves": "12:00 – 23:00",
      "Viernes": "12:00 – 00:00",
      "Sábado": "12:00 – 00:00",
      "Domingo": "12:00 – 18:00",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?... (pon tu embed real aquí)",
    lat: 4.6097, // Ejemplo - ajusta a tu ciudad
    lng: -74.0817,
  },
  social: {
    instagram: "https://instagram.com/brasasyleños",
    facebook: "https://facebook.com/brasasyleños",
    twitter: "https://twitter.com/brasasyleños",
  },
};