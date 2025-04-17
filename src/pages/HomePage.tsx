import Headboard from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="scroll-smooth min-h-screen">
      <main>
        <section id="head" className="scroll-mt-20"><Headboard /></section>
        <section id="about" className="scroll-mt-20"><About /></section>
        <section id="projects" className="scroll-mt-20"><Projects /></section>
        <section id="contact" className="scroll-mt-20"><Contact /></section>
      </main>
    </div>
  );
}
