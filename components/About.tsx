'use client'

import Image from 'next/image'
import { Star, Leaf, Clock, MapPin } from 'lucide-react'

export default function About() {
    return (
      <>
{/* Section Histoire */}
        <section id="about" className="mb-20">
          <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)] font-bold text-center mb-12">
            Notre Histoire
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/terrasse.png"
                alt="Vue de la terrasse du restaurant"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-[color:var(--text-primary)] text-lg mb-6">
                Depuis 1985, Le Bistrot de la Plage est un lieu de rencontre unique à Paris, où l'art de la cuisine française se mêle à l'ambiance chaleureuse d'une plage méditerranéenne.
              </p>
              <p className="text-[color:var(--text-primary)] text-lg mb-6">
                Notre restaurant a été fondé par les frères Martin, deux passionnés de cuisine et d'océan, qui ont su créer une ambiance unique où les saveurs raffinées se marient parfaitement avec l'atmosphère décontractée de la plage.
              </p>
              <div className="flex gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-[color:var(--primary-color)]" />
                  <span className="text-[color:var(--text-primary)]">4.8/5 sur TripAdvisor</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[color:var(--primary-color)]" />
                  <span className="text-[color:var(--text-primary)]">37 ans d'histoire</span>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* Section Philosophie */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] font-bold text-center mb-12">
            Notre Philosophie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md">
              <Leaf className="w-12 h-12 text-[color:var(--primary-color)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
                Cuisine Fraîche
              </h3>
              <p className="text-[color:var(--text-primary)]">
                Nous travaillons uniquement avec des produits frais et locaux, sélectionnés avec soin chaque jour.
              </p>
            </div>
            <div className="text-center p-6 bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-[color:var(--primary-color)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[color:var(--primary-color)] mb-2">
                Service Rapide
              </h3>
              <p className="text-[color:var(--text-primary)]">
                Une équipe professionnelle pour vous servir avec rapidité et efficacité.
              </p>
            </div>
            <div className="text-center p-6 bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md">
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

        {/* Section Team */}
        <section id="team" className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] font-bold text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md p-6">
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
            <div className="bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md p-6">
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
            <div className="bg-[color:var(--secondary-color-2)]  rounded-lg shadow-md p-6">
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
    )
}
