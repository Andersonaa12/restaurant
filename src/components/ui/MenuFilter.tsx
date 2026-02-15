'use client';

import { useState } from 'react';
import type { MenuItem } from '../../data/restaurant.ts';
import { Search } from 'lucide-react';

interface Props {
  items: MenuItem[];
  categories: string[];
}

export default function MenuFilter({ items, categories }: Props) {
  const [selected, setSelected] = useState('Todos');
  const [search, setSearch] = useState('');

  const allCategories = ['Todos', ...categories];

  const filtered = items.filter(item =>
    (selected === 'Todos' || item.category === selected) &&
    (item.name.toLowerCase().includes(search.toLowerCase()) ||
     item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-1">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4">
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`relative px-10 py-2 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden
              ${selected === cat
                ? 'bg-gradient-to-r from-gold to-[#b38f2b] text-black shadow-2xl scale-105'
                : 'glass border border-gold/30 text-text-light dark:text-text-dark hover:border-gold hover:bg-gold/10 hover:scale-105'
              } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50`}
            aria-pressed={selected === cat}
          >
            <span className="relative z-10">{cat}</span>
            {selected === cat && (
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animation-shine" />
            )}
          </button>
        ))}
      </div>

      {/* Búsqueda */}
      <div className="relative max-w-2xl mx-auto mb-16">
        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gold/60 w-6 h-6" />
        <input
          type="text"
          placeholder="Buscar plato o ingrediente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-20 pr-10 py-6 glass rounded-full text-lg outline-none transition-all duration-300 focus:ring-4 focus:ring-gold/40"
        />
      </div>

      {/* Platos – ahora SIN opacity-0 inicial para que aparezcan de inmediato */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className="group relative glass rounded-3xl overflow-hidden shadow-2xl card-hover animate-fade-in-up"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {item.badges.length > 0 && (
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  {item.badges.map(badge => (
                    <span
                      key={badge}
                      className="px-5 py-2 rounded-full bg-gold/90 text-black text-sm font-bold uppercase tracking-wider shadow-lg"
                    >
                      {badge.charAt(0).toUpperCase() + badge.slice(1)}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-3xl font-bold text-text-light dark:text-text-dark group-hover:text-gold transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-4xl font-bold text-gold relative">
                  ${item.price}
                  <span className="absolute inset-0 blur-2xl opacity-70 animate-glow-pulse text-gold">
                    ${item.price}
                  </span>
                </p>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-2xl text-gray-500 dark:text-gray-400 py-1">
          No encontramos platos con ese filtro. ¡Prueba con otra categoría o búsqueda!
        </p>
      )}
    </div>
  );
}