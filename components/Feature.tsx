'use client';

import { Leaf, Clock, MapPin } from 'lucide-react';

export default function Feature() {
  return (
    <section className="mb-20 p-6">
      <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
        Notre Philosophie
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
          <Leaf className="w-10 h-10 text-[color:var(--primary-color)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
            Cuisine Fraîche
          </h3>
          <p className="text-[color:var(--text-primary)]">
            Nous travaillons uniquement avec des produits frais et locaux,
            sélectionnés avec soin chaque jour.
          </p>
        </div>
        <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
          <Clock className="w-10 h-10 text-[color:var(--primary-color)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
            Service Rapide
          </h3>
          <p className="text-[color:var(--text-primary)]">
            Une équipe professionnelle pour vous servir avec rapidité et
            efficacité.
          </p>
        </div>
        <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
          <MapPin className="w-10 h-10 text-[color:var(--primary-color)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
            Emplacement Idéal
          </h3>
          <p className="text-[color:var(--text-primary)]">
            Situé sur la côte d'opale, en bord de mer avec digue aménagée.
          </p>
        </div>
      </div>
    </section>
  );
}
