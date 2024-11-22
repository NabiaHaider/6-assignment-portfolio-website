'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <div id="about-section">
        <About />
      </div>

      <div id="skills-section">
        <Skills />
      </div>

      <div id="projects-section">
        <Projects />
      </div>

      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
