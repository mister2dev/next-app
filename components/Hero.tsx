'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    // <section className="relative w-full h-[80vh] flex items-center justify-center text-white">
    //   {/* Background image */}
    //   <div className="absolute inset-0 -z-10">
    //     <img
    //       src="/hero.jpg"
    //       alt="Restaurant en bord de mer"
    //       className="w-full h-full object-cover brightness-75"
    //     />
    //   </div>

    //   {/* Overlay content */}
    //   <div className="text-center px-4 max-w-2xl">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
    //       Bistro de la Plage
    //     </h1>
    //     <p className="text-lg md:text-xl mb-6 drop-shadow-md">
    //       Cuisine raffinée, vue mer et ambiance chaleureuse
    //     </p>
    //     <Link
    //       href="/reservation"
    //       className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition"
    //     >
    //       Réserver une table
    //     </Link>
    //   </div>
    // </section>
     <section className="py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte à gauche */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)] leading-tight mb-6 max-w-[755px]">
            Savourez l’instant <br className="hidden md:inline" />
            dans notre bistrot de bord de mer
          </h1>
          <p className="text-[color:var(--text-primary)] text-lg mb-8 max-w-md">
            Des produits frais, une cuisine maison et une ambiance chaleureuse. Réservez votre table dès maintenant !
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
          <div className="relative w-full">
            <img
              src="/plat1.png" // <-- place ton image ici
              alt="Plat du restaurant"
              className="object-cover w-full h-full"
            />
            {/* Optionnel : effet overlay */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
