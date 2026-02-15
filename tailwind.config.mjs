/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B22222',        // Rojo fuego
        accent: '#FFD700',         // Dorado clásico
        gold: '#D4AF37',           // Dorado metálico premium (usado en glows y acentos)
        'bg-light': '#FFF8F0',
        'text-light': '#333333',
        'bg-dark': '#1A0F0A',
        'text-dark': '#F5E8C7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.16,1,0.3,1) forwards', // ← forwards obligatorio
        'slow-zoom': 'slow-zoom 40s ease-in-out infinite alternate',
        'ember-float': 'ember-float 20s infinite linear',
        'glow-pulse': 'glow-pulse 4s infinite ease-in-out',
        'lightbox-open': 'lightbox-open 0.6s cubic-bezier(0.16,1,0.3,1)',
        'shine': 'shine 2s infinite',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(80px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'ember-float': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.4' },
          '33%': { transform: 'translate(100px, -150px) rotate(30deg)', opacity: '0.8' },
          '66%': { transform: 'translate(-80px, -100px) rotate(-20deg)', opacity: '0.6' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.4' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
        'lightbox-open': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shine: {
          from: { transform: 'translateX(-100%) skewX(-12deg)' },
          to: { transform: 'translateX(300%) skewX(-12deg)' },
        },
      },
    },
  },
  plugins: [],
};