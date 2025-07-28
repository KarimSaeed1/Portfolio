import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-hero opacity-20 pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-48 h-48 bg-tech-purple/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Languages />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;