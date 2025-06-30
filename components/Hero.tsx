'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte à gauche */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)] leading-tight mb-6 mt-6 max-w-[755px]">
            Savourez l’instant dans notre <br className="hidden md:inline" />
            bistrot de bord de mer
          </h1>
          <p className="text-[color:var(--text-primary)] text-[16px] md:text-[18px] mb-8 max-w-md">
            Des produits frais et locaux, une cuisine maison raffinée et
            authentique, une ambiance chaleureuse qui sent bon le bord de mer.
            Découvrez notre carte inspirée par les saveurs de nos régions et
            laissez-vous transporter par notre service attentionné. Réservez dès
            maintenant pour une expérience culinaire inoubliable !
          </p>
          <a
            href="#reservation"
            className="inline-block bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] font-semibold py-3 px-6 rounded-full shadow-md transition"
          >
            Réserver une table
          </a>
        </div>

        {/* Image à droite */}
        <div className="flex-1 w-full">
          <div className="relative w-full md:min-w-[370px]">
            <img
              src="/plat1.png" // <-- place ton image ici
              alt="Plat du restaurant"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
