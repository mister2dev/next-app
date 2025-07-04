'use client';

type MenuItem = {
  name: string;
  price: string;
};

const menu: { entrees: MenuItem[]; plats: MenuItem[]; desserts: MenuItem[] } = {
  entrees: [
    {
      name: 'Assiette de Bulots Mayonnaise Maison',
      price: '11,90 €',
    },
    {
      name: 'Huîtres du moment (voir ardoise) — les 6',
      price: '15,70 €',
    },
    {
      name: 'Huîtres du moment (voir ardoise) — les 12',
      price: '24,90 €',
    },
    {
      name: 'Avocat Crabe sauce cocktail',
      price: '8,90 €',
    },
    {
      name: 'Terrine Bretonne de campagne IGP',
      price: '7,50 €',
    },
    {
      name: 'Bouquet de crevettes Roses',
      price: '9,20 €',
    },
    {
      name: 'Suggestion de l’ardoise du jour',
      price: '7,90 €',
    },
  ],

  plats: [
    {
      name: 'Poisson du jour (selon arrivage) risotto et légumes de saison',
      price: '24,90 €',
    },
    {
      name: 'Duo de Croquettes de crevettes grises maison, frites, salade',
      price: '18,90 €',
    },
    {
      name: 'Suggestion de l’ardoise du jour',
      price: '24,90 €',
    },
    {
      name: 'Tortellini Parmesan - Ricotta Épinard (végétarien)',
      price: '20,90 €',
    },
    {
      name: 'Salade César (Œuf dur, anchois, parmesan, croûtons, sauce César)',
      price: '16,90 €',
    },
    {
      name: 'Pavé de bœuf Blanc Bleu sauce au choix (+200g)',
      price: '20,90 €',
    },
    {
      name: 'Burger du Chef (bœuf Angus) — Simple',
      price: '17,90 €',
    },
    {
      name: 'Burger du Chef (bœuf Angus) — Double 300g',
      price: '22,90 €',
    },
    {
      name: 'Travers de porc (VF) marinade du Bistrot',
      price: '20,90 €',
    },
    {
      name: 'Potjevleesch de la maison Pinthe (avec os)',
      price: '18,90 €',
    },
  ],
  desserts: [
    {
      name: 'Crème Brulée',
      price: '8,00 €',
    },
    {
      name: 'Mousse au chocolat (Barry)',
      price: '8,00 €',
    },
    {
      name: 'Tarte Citron Revisitée',
      price: '8,00 €',
    },
    {
      name: 'Dessert du Moment',
      price: '8,00 €',
    },
    {
      name: 'Café gourmand',
      price: '9,00 €',
    },
    {
      name: 'Thé gourmand',
      price: '9,00 €',
    },
    {
      name: 'Digestif gourmand (Calvados, Cognac, Limoncello)',
      price: '10,00 €',
    },
  ],
};

export default function RestaurantMenu() {
  return (
    <section
      id="menu"
      className="max-w-3xl mx-auto p-6 text-[color:var(--text-primary)]"
    >
      <h1 className="text-4xl md:text-5xl text-[color:var(--primary-color)] text-center mb-12">
        Menu
      </h1>
      <Section title="Entrées" items={menu.entrees} />
      <Section title="Plats" items={menu.plats} />
      <Section title="Desserts" items={menu.desserts} />
    </section>
  );
}

function Section({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl text-[color:var(--primary-color)] mb-6 border-b border-[color:var(--accent-wood)] pb-2 uppercase tracking-wide">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-start border-b border-dashed border-gray-200 pb-2"
          >
            <span className="font-medium text-[color:var(--text-primary)]">
              {item.name}
            </span>
            <span className="font-semibold text-[color:var(--accent-wood)] text-left whitespace-nowrap min-w-[65px] ml-4">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
