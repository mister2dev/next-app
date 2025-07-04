'use client';

import { Leaf, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Team() {
  return (
    <>
      <section className="mb-20 p-6">
        <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
          Notre Philosophie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
            <Leaf className="w-12 h-12 text-[color:var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Cuisine Fraîche
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Nous travaillons uniquement avec des produits frais et locaux,
              sélectionnés avec soin chaque jour.
            </p>
          </div>
          <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
            <Clock className="w-12 h-12 text-[color:var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Service Rapide
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Une équipe professionnelle pour vous servir avec rapidité et
              efficacité.
            </p>
          </div>
          <div className="text-center p-6 bg-[color:var(--secondary-color-3)] rounded-lg shadow-md">
            <MapPin className="w-12 h-12 text-[color:var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Emplacement Idéal
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Situé en plein cœur de Paris, à deux pas des quais de la Seine.
            </p>
          </div>
        </div>
      </section>
      <section id="team" className="mb-20">
        <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[color:var(--secondary-color-3)] rounded-lg shadow-md p-6">
            <div className="relative h-64 mb-6">
              <Image
                src="/cuisto1.webp"
                alt="Chef Martin"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Chef Martin
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Chef exécutif depuis 2005
            </p>
          </div>
          <div className="bg-[color:var(--secondary-color-3)] rounded-lg shadow-md p-6">
            <div className="relative h-64 mb-6">
              <Image
                src="/cuisto3.webp"
                alt="Sommelier Sophie"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Sophie Dupont
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Sommelière en chef
            </p>
          </div>
          <div className="bg-[color:var(--secondary-color-3)] rounded-lg shadow-md p-6">
            <div className="relative h-64 mb-6">
              <Image
                src="/cuisto2.webp"
                alt="Manager Jean"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
              Jean Moreau
            </h3>
            <p className="text-[color:var(--text-primary)]">
              Directeur général
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
