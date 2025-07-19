'use client';

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="px-8 flex flex-col justify-center w-full"
    >
      <div className="max-w-5xl bg-[color:var(--secondary-color-3)] rounded-xl mx-auto p-6">
        <h3 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6 flex items-center gap-2">
          Réserver votre table
        </h3>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-[color:var(--text-primary)] mb-2 flex items-center gap-2"
            ></label>
            <input
              type="text"
              placeholder="Nom complet"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-[color:var(--text-primary)] mb-2"
            ></label>
            <input
              type="date"
              placeholder="Date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-[color:var(--text-primary)] mb-2"
            ></label>
            <input
              type="time"
              placeholder="Heure"
              id="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-[color:var(--text-primary)] mb-2"
            ></label>
            <select
              id="guests"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
            >
              <option value="1">1 personne</option>
              <option value="2">2 personnes</option>
              <option value="3">3 personnes</option>
              <option value="4">4 personnes</option>
              <option value="5">5 personnes</option>
              <option value="6">6 personnes</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] py-3 rounded-lg font-semibold transition"
          >
            Réserver
          </button>
        </form>
      </div>
    </section>
  );
}
