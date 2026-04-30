"use client";

export default function About() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-white scroll-animate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center tracking-tight">
          Über mich
        </h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
            Lange Zeit war Gestaltung meine Leidenschaft, aber bei den ersten Berührungspunkten mit
            HTML und CSS in der Ausbildung war mir klar, dass ich im Bereich der Webanwendungen
            zuhause bin. Weg vom Print, rein ins Digitale. Ich bin ein technikaffiner Typ mit einer
            gesunden Portion Nerd, der es liebt, komplexe Logik in sauberen Code zu verwandeln.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Wenn ich nicht gerade code, findet man mich entweder draußen an der frischen Luft beim
            Spaziergang, beim Sport oder vertieft in ein Videospiel mit meinen Freunden. Die
            Kombination aus gestalterischem Auge und technischer Leidenschaft ist mein täglicher
            Antrieb.
          </p>
        </div>
      </div>
    </section>
  );
}
