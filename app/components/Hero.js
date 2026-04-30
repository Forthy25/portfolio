"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-white to-slate-200"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* HEADLINE - First on mobile */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight md:col-start-1 md:row-start-1 order-1 pt-4 md:pt-0 break-words scroll-animate">
          Moderne web <br />
          entwicklung mit
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Designverständnis
          </span>
        </h1>

        {/* IMAGE WITH GLOW - Second on mobile */}
        <div className="relative group order-2 md:col-start-2 md:row-start-1 md:row-span-3 w-full md:w-auto py-8 md:py-0 flex flex-col items-center md:items-stretch scroll-animate">
          {/* SUBTLE GLOW EFFEKT */}
          <div className="absolute -top-20 -right-10 w-72 h-72 bg-blue-400/8 blur-3xl rounded-full z-0" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-400/6 blur-3xl rounded-full z-0" />

          {/* INNER GLOW EFFECT */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/30 to-cyan-300/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500 z-10" />

          {/* IMAGE CONTAINER */}
          <div className="relative aspect-square w-full max-w-sm md:max-w-none rounded-full overflow-hidden shadow-2xl border-4 border-white/50 z-20">
            <Image
              src="/portrait-foto.png"
              alt="Marc - Portrait"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-[50%_30%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out brightness-110 contrast-105"
              priority
            />

            {/* SUBTLE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-black/10" />
          </div>
        </div>

        {/* TEXT CONTENT - Third on mobile */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 order-3 md:col-start-1 md:row-start-2 py-6 md:py-0 leading-relaxed scroll-animate">
          „Hi, ich bin Marc. Ich komme ursprünglich aus der Mediengestaltung, habe aber irgendwann
          gemerkt, dass ich Layouts nicht nur entwerfen, sondern auch selbst zum Leben erwecken
          will. Heute entwickle ich Webanwendungen, bei denen ich mein Auge für Design mit sauberem
          Code verbinde."
        </p>

        {/* BUTTONS - Fourth on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 order-4 md:col-start-1 md:row-start-3 w-full sm:w-auto pt-4 md:pt-0 scroll-animate">
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200 transform hover:scale-102 text-sm sm:text-base whitespace-nowrap"
          >
            Meine Projekte
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3 bg-white text-gray-900 rounded-lg font-medium border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition duration-200 text-sm sm:text-base whitespace-nowrap"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
