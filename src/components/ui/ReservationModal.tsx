'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, X, Phone } from 'lucide-react';
import { restaurantConfig } from '../../data/restaurant.ts';

const ReservationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('openReservationModal', handler);
    return () => window.removeEventListener('openReservationModal', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Reserva recibida con éxito! (demo)');
    setIsOpen(false);
    setForm({ date: '', time: '', guests: '2', name: '', email: '', phone: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4 py-6 overflow-y-auto">
      {/* Contenedor principal responsivo */}
      <div className="glass w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Glow sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />

        {/* Botón cerrar – siempre visible y accesible */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition text-gold text-3xl sm:text-4xl focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6 sm:w-7 h-7" />
        </button>

        {/* Header – ajustado para móvil */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-gold to-[#b38f2b] flex items-center justify-center shadow-2xl shrink-0">
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Reserva tu mesa
            </h2>
            <p className="text-lg sm:text-xl text-gold/80 mt-1">
              Brasas y Leños • Experiencia exclusiva
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Fecha y Hora – en columna en móvil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Fecha</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-base sm:text-lg outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Hora</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-base sm:text-lg outline-none transition"
              />
            </div>
          </div>

          {/* Personas */}
          <div>
            <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Número de personas</label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-base sm:text-lg outline-none transition"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'persona' : 'personas'}
                </option>
              ))}
            </select>
          </div>

          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Nombre completo</label>
            <input
              type="text"
              placeholder="Juan Pérez"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-base sm:text-lg outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Email</label>
            <input
              type="email"
              placeholder="hola@brasasyleños.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 text-base sm:text-lg outline-none transition"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium mb-2 sm:mb-3 text-gold/70">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-5 sm:left-7 top-1/2 -translate-y-1/2 text-gold/60 w-5 h-5 sm:w-6 sm:h-6" />
              <input
                type="tel"
                placeholder="+57 300 123 4567"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-2xl pl-14 sm:pl-16 pr-5 sm:pr-7 py-4 sm:py-5 text-base sm:text-lg outline-none transition"
              />
            </div>
          </div>

          {/* Botón confirmar */}
          <button
            type="submit"
            className="group relative w-full py-6 sm:py-8 text-xl sm:text-2xl font-bold text-black bg-gradient-to-r from-gold to-[#b38f2b] rounded-3xl shadow-2xl overflow-hidden transition-all hover:scale-[1.03] active:scale-95 mt-4 sm:mt-6"
          >
            <span className="relative z-10">Confirmar Reserva</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          {/* Teléfono alternativo */}
          <div className="text-center pt-6 sm:pt-8 border-t border-gold/20">
            <p className="text-gold/70 text-base sm:text-lg">¿Prefieres reservar por teléfono?</p>
            <a
              href={`tel:${restaurantConfig.location.phone}`}
              className="mt-3 inline-flex items-center gap-3 text-2xl sm:text-3xl font-medium text-gold hover:text-gold/90 transition"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              {restaurantConfig.location.phone}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;