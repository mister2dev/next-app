'use client';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="mb-20">
        <div className="max-w-5xl mx-auto px-6">
          <section id="contact" className="mb-20">
            <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
              Contactez-nous
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              {/* Colonne Formulaire */}
              <div className="bg-white/90 shadow-md rounded-xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6 flex items-center gap-2">
                  Réserver votre table
                </h3>
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[color:var(--text-primary)] mb-2 flex items-center gap-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-[color:var(--text-primary)] mb-2"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-[color:var(--text-primary)] mb-2"
                    >
                      Heure
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-[color:var(--text-primary)] mb-2"
                    >
                      Nombre de personnes
                    </label>
                    <select
                      id="guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] py-3 rounded-lg font-semibold transition"
                  >
                    Réserver
                  </button>
                </form>
              </div>
              {/* Colonne Infos */}
              <div className="flex flex-col gap-8 justify-center bg-white/70 rounded-xl p-8 border border-gray-100 shadow-md">
                <div>
                  <h4 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[color:var(--primary-color)]" />
                    Adresse
                  </h4>
                  <p className="text-gray-700">
                    123 Plage du Soleil, 34000 Montpellier
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[color:var(--primary-color)]" />
                    Email
                  </h4>
                  <a
                    href="mailto:contact@bistrotdelaplage.fr"
                    className="text-blue-600 hover:underline"
                  >
                    contact@bistrotdelaplage.fr
                  </a>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[color:var(--primary-color)]" />
                    Téléphone
                  </h4>
                  <a
                    href="tel:+33412345678"
                    className="text-blue-600 hover:underline"
                  >
                    04 12 34 56 78
                  </a>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2 flex items-center gap-2">
                    Localisation
                  </h4>
                  <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <iframe
                      title="Carte"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=3.876716%2C43.611242%2C3.879716%2C43.613242&amp;layer=mapnik"
                      width="100%"
                      height="180"
                      className="border-0 w-full h-44"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
