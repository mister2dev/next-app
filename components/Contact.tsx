'use client';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="mb-20">
        <div className="max-w-5xl mx-auto px-6">
          <section id="contact">
            <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
              Contactez-nous
            </h2>
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
                  className="text-[color:var(--accent-wood)] hover:underline"
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
                  className="text-[color:var(--accent-wood)] hover:underline"
                >
                  04 12 34 56 78
                </a>
              </div>
              <h4 className="text-xl font-semibold text-[color:var(--primary-color)] flex items-center gap-2">
                Localisation
              </h4>
              <div className="-mx-8">
                <div className="overflow-hidden shadow-sm border border-gray-200 relative aspect-square w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.615471358557!2d3.054258015750306!3d50.62924937952842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d4b6d4d245d3%3A0x9f93c0c75aa45f4c!2sLille%2C%20France!5e0!3m2!1sfr!2sfr!4v1687659731214!5m2!1sfr!2sfr"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
