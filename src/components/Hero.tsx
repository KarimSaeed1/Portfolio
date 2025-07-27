import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tech-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slideInLeft">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-glow mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Suez, Egypt</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Backend</span>
              <br />
              <span className="text-foreground">Software Engineer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Backend Developer @SQM Company
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              4+ years of experience designing, building, and optimizing scalable server-side solutions. 
              Proficient in Node.js, Express.js, MongoDB, PostgreSQL, and cloud technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" className="animate-glow">
                <Github className="w-5 h-5" />
                View My Work
              </Button>
              <Button variant="glass" size="xl">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary-glow transition-colors">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src="/lovable-uploads/9653b0df-5a73-4b83-b168-335bd7224118.png"
                    alt="Karim Saeed Elrashidy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-tech-blue/20 rounded-full flex items-center justify-center animate-float">
                <span className="text-tech-blue font-bold text-lg">JS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-success font-bold text-lg">Node</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                <span className="text-tech-purple font-bold text-sm">DB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToAbout}>
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;