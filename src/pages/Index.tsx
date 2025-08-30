import { useState } from 'react';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Services from '@/components/portfolio/Services';
import Contact from '@/components/portfolio/Contact';
import Navigation from '@/components/portfolio/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        <section id="services" className="min-h-screen">
          <Services />
        </section>
        
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;