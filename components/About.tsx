'use client';

import Image from 'next/image';
import { Clock, Star } from 'lucide-react';

export default function About() {
  return (
    <>
      <section id="about" className="p-6 bg-[color:var(--secondary-color-3)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] -mx-6 -mt-6">
            <Image
              src="/deco_interieur.webp"
              alt="Vue de la terrasse du restaurant"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)] text-center">
            Notre Histoire
          </h1>
          <div>
            <p className="text-[color:var(--text-primary)] text-base text-center mb-6">
              Depuis 1985, Le Restaurant Brasserie Française est une adresse
              emblématique en bord de mer, où la cuisine française raffinée
              rencontre l’ambiance douce et ensoleillée du littoral.
            </p>
            <p className="text-[color:var(--text-primary)] text-base text-center mb-6">
              Fondé par les frères Martin, deux passionnés de gastronomie et
              d’océan, notre établissement vous accueille dans un cadre
              authentique et chaleureux, où les produits frais et les saveurs
              marines sont à l’honneur. Ici, chaque plat évoque les embruns et
              la convivialité d’un moment partagé les pieds dans le sable.
            </p>
            <div className="flex gap-8 my-10">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-[color:var(--primary-color)]" />
                <span className="text-[color:var(--text-primary)]">
                  4.8/5 sur TripAdvisor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[color:var(--primary-color)]" />
                <span className="text-[color:var(--text-primary)]">
                  37 ans d'histoire
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
