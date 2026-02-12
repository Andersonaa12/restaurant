import React, { useState } from 'react';
import type { MenuItem } from '../../data/restaurant.ts';
import { Search, Star } from 'lucide-react';

interface Props { items: MenuItem[]; categories: string[]; }

const MenuFilter: React.FC<Props> = ({ items, categories }) => {
  const [selected, setSelected] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = items.filter(i => 
    (selected === 'Todos' || i.category === selected) &&
    (i.name.toLowerCase().includes(search.toLowerCase()) || 
     i.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Filtros + búsqueda */}
      <div class="flex flex-wrap gap-3 mb-12">
        {['Todos', ...categories].map(cat => (
          <button key={cat} onClick={() => setSelected(cat)}
            class={`px-8 py-3.5 rounded-3xl text-sm font-medium transition-all ${selected === cat 
              ? 'bg-gradient-to-r from-primary to-[#E8C46A] text-[#1F1A17] shadow-xl' 
              : 'glass hover:bg-white/10'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div class="relative mb-12 max-w-md">
        <Search class="absolute left-6 top-4 text-accent/50 w-5 h-5" />
        <input type="text" placeholder="Buscar plato..." value={search} onChange={e => setSearch(e.target.value)}
          class="w-full pl-14 pr-6 py-5 glass rounded-3xl outline-none text-lg" />
      </div>

      {/* Platos */}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} class="glass rounded-3xl overflow-hidden card-hover group">
            <div class="relative">
              <img src={item.image} alt={item.name} class="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
              {item.badges.length > 0 && (
                <div class="absolute top-4 right-4 flex flex-wrap gap-2">
                  {item.badges.map(b => <span key={b} class="glass text-[10px] px-3 py-1 rounded-full">{b}</span>)}
                </div>
              )}
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start">
                <h3 class="font-semibold text-2xl">{item.name}</h3>
                <span class="text-3xl font-medium text-primary">€{item.price}</span>
              </div>
              <p class="text-accent/70 mt-3 line-clamp-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;