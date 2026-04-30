"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
