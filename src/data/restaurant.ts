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
  name: "Restaurante",
  tagline: "La luz de la cocina italiana moderna",
  subtitle: "Restaurante • 2026",
  description: "Un espacio donde la tradición italiana se encuentra con la innovación. Cada plato es una experiencia sensorial.",
  heroImage: "https://picsum.photos/id/1016/2000/1200",
  colors: {
    primary: "#D4AF37",
    secondary: "#1F1A17",
    accent: "#F4EDE4",
    gradientStart: "#D4AF37",
    gradientEnd: "#E8C46A",
    darkBg: "#0F0D0B",
    darkText: "#F8F1E3",
  },
  
  menu: {
    categories: ["Entradas", "Principales", "Postres", "Vinos", "Bebidas"],
    items: [
      // Entradas
      { id: 1, category: "Entradas", name: "Carpaccio di Manzo", description: "Ternera, rúcula, parmesano 36 meses y reducción de balsámico", price: 22, image: "https://picsum.photos/id/292/600/400", badges: ["sin gluten"] },
      { id: 2, category: "Entradas", name: "Bruschetta Tricolore", description: "Tomate confitado, albahaca y mozzarella de búfala", price: 16, image: "https://picsum.photos/id/431/600/400", badges: ["vegetariano"] },
      { id: 3, category: "Entradas", name: "Calamari Fritti", description: "Calamares con salsa aioli casera y limón", price: 19, image: "https://picsum.photos/id/201/600/400", badges: [] },
      // Principales
      { id: 4, category: "Principales", name: "Rigatoni all'Amatriciana", description: "Guanciale, tomate San Marzano y pecorino romano", price: 24, image: "https://picsum.photos/id/1060/600/400", badges: [] },
      { id: 5, category: "Principales", name: "Risotto al Tartufo", description: "Arroz Carnaroli, trufa negra y parmesano", price: 32, image: "https://picsum.photos/id/870/600/400", badges: ["vegetariano"] },
      { id: 6, category: "Principales", name: "Filetto di Manzo", description: "200 g con salsa de vino tinto y patatas fondant", price: 48, image: "https://picsum.photos/id/106/600/400", badges: [] },
      // Postres
      { id: 7, category: "Postres", name: "Tiramisù Classico", description: "Con café de especialidad y cacao 70%", price: 14, image: "https://picsum.photos/id/1080/600/400", badges: ["vegetariano"] },
      { id: 8, category: "Postres", name: "Panna Cotta al Pistacchio", description: "Con coulis de frambuesa y pistacho de Bronte", price: 15, image: "https://picsum.photos/id/292/600/400", badges: [] },
      // Vinos
      { id: 9, category: "Vinos", name: "Brunello di Montalcino 2018", description: "Tenuta Canalicchio", price: 95, image: "https://picsum.photos/id/201/600/400", badges: ["tinto"] },
      { id: 10, category: "Vinos", name: "Amarone della Valpolicella", description: "Masi 2016", price: 110, image: "https://picsum.photos/id/870/600/400", badges: ["tinto"] },
      // Bebidas
      { id: 11, category: "Bebidas", name: "Negroni Restaurante", description: "Campari, gin y vermut rojo con twist de naranja", price: 16, image: "https://picsum.photos/id/431/600/400", badges: [] },
      { id: 12, category: "Bebidas", name: "Spritz al Prosecco", description: "Prosecco, Aperol y soda", price: 14, image: "https://picsum.photos/id/1060/600/400", badges: [] },
    ],
  },
  testimonials: [
    { name: "Sofia Rossi", role: "Food Critic – La Repubblica", text: "Restaurante es, sin duda, el restaurante más elegante y delicioso que he visitado en Roma en los últimos años.", image: "https://picsum.photos/id/64/128/128", rating: 5 },
    { name: "Marco Bianchi", role: "Chef Estrella Michelin", text: "La fusión perfecta entre tradición y vanguardia. Cada plato es una obra de arte.", image: "https://picsum.photos/id/91/128/128", rating: 5 },
    { name: "Elena Conti", role: "Influencer gastronómica", text: "El ambiente, el servicio y la comida… todo es perfecto. ¡Volvería mil veces!", image: "https://picsum.photos/id/1005/128/128", rating: 5 },
  ],
  gallery: [
    { url: "https://picsum.photos/id/1015/800/600", alt: "Interior", caption: "Sala principal" },
    { url: "https://picsum.photos/id/201/800/600", alt: "Plato", caption: "Rigatoni all'Amatriciana" },
    { url: "https://picsum.photos/id/870/800/600", alt: "Vino", caption: "Cava de vinos" },
    { url: "https://picsum.photos/id/1060/800/600", alt: "Terraza", caption: "Terraza al atardecer" },
    { url: "https://picsum.photos/id/292/800/600", alt: "Postre", caption: "Tiramisù" },
    { url: "https://picsum.photos/id/431/800/600", alt: "Cocina", caption: "Vista a la cocina abierta" },
  ],
  about: {
    title: "Nuestra historia",
    story: "Fundado en 2022 por el chef Alessandro Rossi, Restaurante nace del amor por la cocina italiana y el deseo de crear un espacio donde cada detalle cuente una historia. Aquí la tradición se reescribe con técnicas modernas sin perder su alma.",
    image: "https://picsum.photos/id/1005/800/600",
  },
  location: {
    address: "Via della Luce 42, 00186 Roma, Italia",
    phone: "+39 06 987 6543",
    email: "reservas@Restaurante.it",
    hours: {
      "Lunes": "18:00 – 23:00",
      "Martes": "18:00 – 23:00",
      "Miércoles": "18:00 – 23:00",
      "Jueves": "18:00 – 23:00",
      "Viernes": "18:00 – 00:00",
      "Sábado": "18:00 – 00:00",
      "Domingo": "Cerrado",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5!2d12.492!3d41.903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRome%2C%20Italy!5e0!3m2!1sen!2s!4v1700000000000",
    lat: 41.9028,
    lng: 12.4964,
  },
  social: {
    instagram: "https://instagram.com/Restauranterestaurant",
    facebook: "https://facebook.com/Restauranterestaurant",
    twitter: "https://twitter.com/Restauranterestaurant",
  },
};