'use client'

type MenuItem = {
  name: string
  price: string
}

const menu: { entrees: MenuItem[]; plats: MenuItem[]; desserts: MenuItem [] } = {
  entrees: [
    { name: 'Aumônière de chèvre frais au miel et herbes de Provence', price: '8,90 €' },
    { name: 'Os à moelle gratiné', price: '8,90 €' },
    { name: 'Saumon gravelax maison', price: '9,50 €' },
    { name: 'Entrée du jour', price: '8,90 €' },
  ],
  plats: [
    {
      name: 'Dos de cabillaud et légumes de saison (sauce au beurre blanc citronné)',
      price: '20,90 €',
    },
    {
      name: 'Pavé de saumon, tomates et pesto IGP (avec son riz blanc)',
      price: '20,90 €',
    },
    {
      name: 'Pavé de bœuf et frites maison (sauce au choix)',
      price: '19,90 €',
    },
    {
      name: 'Belle entrecôte (~350 g) et frites maison (sauce au choix)',
      price: '22,50 €',
    },
    { 
      name: 'Burger classique du chef (frites)',
      price: '17€50'
    },
    { 
      name: 'Salade César',
      price: '18€50' 
    },
    { 
      name: 'Supplément frites',
      price: '2€' 
    },
    { 
      name: 'Supplément sauce (Poivre, Maroilles, Roquefort, Béarnaise)',
      price: '3€'},
   ],
   desserts: [
    { name: 'Assiette gourmande', price: '8€90' },
    { name: 'Tarte du jour', price: '7€50' },
    { name: 'Mousse au chocolat', price: '7€50' },
    { name: 'Crème brûlée', price: '7€50' },
  ],
}

export default function RestaurantMenu() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-gray-800 font-serif">
      <Section title="Entrées" items={menu.entrees} />
      <Section title="Plats" items={menu.plats} />
      <Section title="Desserts" items={menu.desserts} />
    </section>
  )
}

function Section({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-gray-300 pb-2 uppercase tracking-wide">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-start border-b border-dashed border-gray-200 pb-2"
          >
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold text-red-600">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
