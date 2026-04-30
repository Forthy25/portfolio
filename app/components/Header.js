"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="text-lg sm:text-xl font-semibold tracking-tight hover:text-blue-600 transition duration-200 cursor-pointer bg-none border-none p-0"
        >
          Marc Schüttforth
        </button>
        <ul className="hidden sm:flex gap-8">
          <li>
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition duration-200"
            >
              Über mich
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-blue-600 transition duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 transition duration-200"
            >
              Projekte
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition duration-200"
            >
              Kontakt
            </a>
          </li>
        </ul>
        <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-4 py-6 text-right">
            <li>
              <a
                href="#about"
                className="inline-block hover:text-blue-600 transition font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Über mich
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="inline-block hover:text-blue-600 transition font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="inline-block hover:text-blue-600 transition font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Projekte
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-block hover:text-blue-600 transition font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
