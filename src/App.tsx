import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen selection:bg-neutral-300 selection:text-black">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ContactSection />
        </main>
        <Footer />
        <ProjectModal />
      </div>
    </PortfolioProvider>
  );
}