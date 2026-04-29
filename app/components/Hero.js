import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-white to-slate-200"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* HEADLINE - First on mobile */}
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold leading-tight tracking-tight md:col-start-1 md:row-start-1 order-1 pt-4 md:pt-0">
          Moderne web <br />
          entwicklung mit
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Designverständnis
          </span>
        </h1>

        {/* IMAGE WITH GLOW - Second on mobile */}
        <div className="relative group order-2 md:col-start-2 md:row-start-1 md:row-span-3 w-full md:w-auto py-8 md:py-0 flex flex-col items-center md:items-stretch">
          {/* GLOW EFFEKTE - Sonnenfarben */}
          <div className="absolute -top-10 -left-8 w-96 h-96 bg-orange-300/12 blur-3xl rounded-full z-0" />
          <div className="absolute -top-6 -left-20 w-64 h-64 bg-yellow-300/9 blur-2xl rounded-full z-0" />

          {/* INNER GLOW EFFECT */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/30 to-cyan-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500 z-10" />

          {/* IMAGE CONTAINER */}
          <div className="relative aspect-square w-full max-w-sm md:max-w-none rounded-full overflow-hidden shadow-2xl border-4 border-white/50 z-20">
            <Image
              src="/portrait-foto.png"
              alt="Marc - Portrait"
              fill
              className="object-cover object-[50%_30%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out brightness-110 contrast-105"
              priority
            />

            {/* SUBTLE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-black/10" />
          </div>
        </div>

        {/* TEXT CONTENT - Third on mobile */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 order-3 md:col-start-1 md:row-start-2 py-6 md:py-0 leading-relaxed">
          „Hi, ich bin Marc. Ich komme ursprünglich aus der Mediengestaltung,
          habe aber irgendwann gemerkt, dass ich Layouts nicht nur entwerfen,
          sondern auch selbst zum Leben erwecken will. Heute entwickle ich
          Webanwendungen, bei denen ich mein Auge für Design mit sauberem Code
          verbinde."
        </p>

        {/* BUTTONS - Fourth on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 order-4 md:col-start-1 md:row-start-3 w-full md:w-auto pt-4 md:pt-0">
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 text-sm sm:text-base"
          >
            Meine Projekte
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition text-sm sm:text-base"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
