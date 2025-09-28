import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Karim Saeed</h3>
            <p className="text-muted-foreground">Software Engineer</p>
            <p className="text-sm text-muted-foreground">Building scalable solutions</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors" asChild>
              <a href="https://github.com/KarimSaeed1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors" asChild>
              <a href="https://www.linkedin.com/in/kareem-saeed-a4869a195/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors" asChild>
              <a href="mailto:karimsaeed816@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button variant="hero" size="sm" onClick={scrollToTop} className="animate-glow">
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1 flex-wrap px-4 text-center">
            <span>© {currentYear} Karim Saeed Elrashidy.</span>
            <span className="flex items-center gap-1">
              Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using React & TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;