'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Texte à gauche */}
        <div className="md:text-left">
          <h1 className="text-4xl md:text-[80px] text-[color:var(--primary-color)] leading-tight mt-14 max-w-[755px]">
            Savourez l’instant en <br className="hidden md:inline" />
            bord de mer
          </h1>
          <p className="text-[color:var(--text-primary)] text-[16px] my-8 ">
            Cuisine maison à base de produits frais et locaux, dans une ambiance
            chaleureuse aux saveurs du littoral. Réservez votre table pour une
            expérience authentique et gourmande.
          </p>
        </div>

        {/* Image à droite */}
        <div className="flex-1 w-full">
          <div className="relative w-full md:min-w-[370px]">
            <img
              src="/plat4.png"
              alt="Plat du restaurant"
              className="object-cover w-full h-full mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
