'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
    console.log('Formulaire soumis:', formData);
    alert('Votre réservation a bien été enregistrée !');
  };

  return (
    <section
      id="reservation"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[color:var(--primary-color)] mb-4">
            Réservez votre table
          </h2>
          <p className="text-lg text-[color:var(--text-primary)]/80 max-w-2xl mx-auto">
            Profitez d'une expérience culinaire exceptionnelle dans notre
            restaurant. Réservez dès maintenant pour garantir votre place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[color:var(--secondary-color-3)] rounded-2xl shadow-xl overflow-hidden border border-[color:var(--secondary-color-1)]/30"
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative overflow-hidden">
              {/* Image de fond */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/deco_interieur.webp')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary-color)]/90 to-[color:var(--secondary-color-1)]/90 mix-blend-multiply" />
              </div>

              {/* Contenu par-dessus l'image */}
              <div className="relative z-10 p-8 text-[color:var(--text-inverse)] flex flex-col justify-center h-full">
                <div className="max-w-xs mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Nos horaires</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex justify-between">
                      <span>Lun - Ven</span>
                      <span>12h - 14h</span>
                    </li>
                    <li className="flex justify-end">
                      <span>19h - 22h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi</span>
                      <span>12h - 14h</span>
                    </li>
                    <li className="flex justify-end">
                      <span>19h - 22h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche</span>
                      <span>12h - 17h</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <p className="text-[color:var(--text-inverse)]/90">
                      01 23 45 67 89
                    </p>
                    <p className="text-[color:var(--text-inverse)]/90">
                      contact@brasserie-francaise.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Heure
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Nombre de personnes
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </option>
                      ))}
                      <option value="8+">Plus de 8 personnes</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[color:var(--text-primary)]"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[color:var(--secondary-color-1)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary-color)] focus:border-transparent transition bg-white/90"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[color:var(--primary-color)] to-[color:var(--secondary-color-1)] hover:from-[color:var(--primary-color)]/90 hover:to-[color:var(--secondary-color-1)]/90 text-[color:var(--text-inverse)] font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Réserver maintenant
                  </motion.button>
                </div>

                <p className="text-xs text-[color:var(--text-primary)]/70 text-center mt-4">
                  En soumettant ce formulaire, vous acceptez nos conditions
                  d'utilisation et notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
