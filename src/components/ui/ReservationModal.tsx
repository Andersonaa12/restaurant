import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

const ReservationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
  });

  // Escuchar evento global para abrir el modal
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('openReservationModal', handler);
    return () => window.removeEventListener('openReservationModal', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Reserva recibida! (demo – en producción se enviaría por email/API)');
    setIsOpen(false);
    setForm({ date: '', time: '', guests: '2', name: '', email: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xl p-4">
      {/* Modal container */}
      <div 
        className="glass w-full max-w-lg rounded-3xl p-10 relative animate-in fade-in zoom-in duration-300"
        style={{ animation: 'modalPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-white/10 transition text-3xl text-accent/70 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header con icono */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#E8C46A] flex items-center justify-center">
            <Calendar className="w-7 h-7 text-[#1F1A17]" />
          </div>
          <div>
            <h2 className="font-display text-5xl font-semibold tracking-tighter">Reserva tu mesa</h2>
            <p className="text-accent/60 text-lg">Restaurante • Restaurante</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Fecha y Hora */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-accent/70">Fecha</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-white/5 dark:bg-black/30 border border-white/10 focus:border-primary rounded-2xl px-6 py-4 outline-none text-lg transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-accent/70">Hora</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-white/5 dark:bg-black/30 border border-white/10 focus:border-primary rounded-2xl px-6 py-4 outline-none text-lg transition"
              />
            </div>
          </div>

          {/* Personas */}
          <div>
            <label className="block text-sm font-medium mb-2 text-accent/70">Número de personas</label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full bg-white/5 dark:bg-black/30 border border-white/10 focus:border-primary rounded-2xl px-6 py-4 outline-none text-lg transition"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'persona' : 'personas'}
                </option>
              ))}
            </select>
          </div>

          {/* Nombre y Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-accent/70">Nombre completo</label>
            <input
              type="text"
              placeholder="Alessandro Rossi"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 dark:bg-black/30 border border-white/10 focus:border-primary rounded-2xl px-6 py-4 outline-none text-lg transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-accent/70">Email</label>
            <input
              type="email"
              placeholder="hola@Restaurante.it"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 dark:bg-black/30 border border-white/10 focus:border-primary rounded-2xl px-6 py-4 outline-none text-lg transition"
            />
          </div>

          {/* Botón premium */}
          <button
            type="submit"
            className="btn-primary w-full py-7 text-xl font-medium rounded-3xl mt-4 shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            Confirmar reserva
          </button>

          <p className="text-center text-xs text-accent/50 mt-4">
            Te enviaremos confirmación por email
          </p>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;