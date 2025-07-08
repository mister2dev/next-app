'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-18">
        {/* Texte à gauche */}
        <div className="md:text-left max-w-[720px]">
          <h1 className="text-4xl md:text-[80px] text-[color:var(--primary-color)] leading-tight mt-14">
            Savourez l’instant en bord de mer
          </h1>
          <p className="text-[color:var(--text-primary)] text-[16px] my-8 ">
            Cuisine maison à base de produits frais et locaux, dans une ambiance
            chaleureuse aux saveurs du littoral. Réservez votre table pour une
            expérience authentique et gourmande.
          </p>
          <a
            href="#reservation"
            className="inline-block mt-4 px-6 py-2 border border-[color:var(--primary-color)] text-[color:var(--primary-color)] rounded-full text-base font-light tracking-wide focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-color)] focus:ring-opacity-50 cta-hover-translate"
            style={{ letterSpacing: '0.08em' }}
          >
            <span>Réserver</span>
          </a>
        </div>

        {/* Image à droite */}
        <div className="flex-1 w-full max-w-[600px]">
          <div className="relative w-full md:min-w-[570px]">
            <img
              src="/plat4.png"
              alt="Plat du restaurant"
              className="object-cover w-full h-full mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
