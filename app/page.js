import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
