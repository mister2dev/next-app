'use client';

import Image from 'next/image';
import { Clock, Star } from 'lucide-react';

export default function About() {
  return (
    <>
      <section id="about" className="mb-20 px-6">
        <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)]  text-center mb-12">
          Notre Histoire
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/interieur.png"
              alt="Vue de la terrasse du restaurant"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-[color:var(--text-primary)] text-base text-center mb-6">
              Depuis 1985, Le Bistrot de la Plage est un lieu de rencontre
              unique à Paris, où l'art de la cuisine française se mêle à
              l'ambiance chaleureuse d'une plage méditerranéenne.
            </p>
            <p className="text-[color:var(--text-primary)] text-base text-center mb-6">
              Notre restaurant a été fondé par les frères Martin, deux
              passionnés de cuisine et d'océan, qui ont su créer une ambiance
              unique où les saveurs raffinées se marient parfaitement avec
              l'atmosphère décontractée de la plage.
            </p>
            <div className="flex gap-8 mt-8">
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
