// app/mentions-legales/page.tsx

export default function Legals() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Mentions légales</h1>
  
        <section>
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p>
            Le site est édité par <strong>Bistrot de la Plage</strong>, situé au 123 Rue des Dunes, 75000 Paris.
            <br />
            Téléphone : 01 23 45 67 89
            <br />
            Email : contact@bistrotdelaplage.fr
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            <br />
            Site : <a href="https://vercel.com" className="text-blue-600 underline">https://vercel.com</a>
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>
            Le restaurant décline toute responsabilité quant aux éventuelles interruptions du site, à la présence de bugs ou à l’inexactitude des informations disponibles sur le site.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive du restaurant, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.
          </p>
        </section>
      </main>
    );
  }
  