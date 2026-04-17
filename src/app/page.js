import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AskShubot from "@/components/AskShubot";

const sectionLoading = () => <div className="h-24" />;

const About = dynamic(() => import("@/components/About"), {
  loading: sectionLoading,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: sectionLoading,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: sectionLoading,
});
const Stats = dynamic(() => import("@/components/Stats"), {
  loading: sectionLoading,
});
const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: sectionLoading,
});
const ExchangeGallery = dynamic(() => import("@/components/ExchangeGallery"), {
  loading: sectionLoading,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: sectionLoading,
});
const Highlights = dynamic(() => import("@/components/Highlights"), {
  loading: sectionLoading,
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Achievements />
      <ExchangeGallery />
      <Highlights />
      <Contact />
      <Footer />

      <AskShubot />
    </main>
  );
}