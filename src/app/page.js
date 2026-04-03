import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ExchangeGallery from "@/components/ExchangeGallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Achievements />
      <ExchangeGallery />
      <Footer />
    </main>
  );
}