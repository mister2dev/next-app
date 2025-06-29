// app/politique-de-confidentialite/page.tsx

export default function Privacy() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
  
        <section>
          <h2 className="text-xl font-semibold">Données collectées</h2>
          <p>
            Nous collectons des données personnelles lorsque vous effectuez une réservation ou lorsque vous nous contactez via le formulaire de contact. Ces données peuvent inclure : nom, email, téléphone, et préférences de réservation.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Utilisation des données</h2>
          <p>
            Les données sont utilisées uniquement dans le cadre du fonctionnement du restaurant, pour répondre à vos demandes, traiter vos réservations ou vous envoyer des informations liées à nos services.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Conservation</h2>
          <p>
            Les données sont conservées pendant une durée maximale de 3 ans, sauf obligation légale contraire.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression ou de limitation de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@bistrotdelaplage.fr" className="text-blue-600 underline">contact@bistrotdelaplage.fr</a>.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p>
            Le site peut utiliser des cookies à des fins de statistiques ou de bon fonctionnement. Vous pouvez les refuser via les paramètres de votre navigateur.
          </p>
        </section>
      </main>
    );
  }
  