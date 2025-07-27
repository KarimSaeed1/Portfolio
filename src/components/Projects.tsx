import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Calendar, Users, Zap, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Ayat Workflow",
      description: "Robust workflow management platform designed to handle and orchestrate complex processes across various task types and operational flows. Reduced process time by 40%.",
      technologies: ["Node.js", "Express.js", "GraphQL", "PostgreSQL", "Prisma", "TypeScript"],
      category: "enterprise",
      live: null,
      github: null,
      impact: "40% process time reduction",
      year: "2024"
    },
    {
      title: "Refee E-Commerce Platform",
      description: "Comprehensive e-commerce website with admin panel, PayLink payment integration, and support for 5M+ concurrent users.",
      technologies: ["Node.js", "Express.js", "MongoDB", "PayLink"],
      category: "ecommerce",
      live: "https://refee.sa/",
      github: null,
      impact: "5M+ concurrent users",
      year: "2024"
    },
    {
      title: "Ayat LIMS",
      description: "Laboratory Information Management System to streamline laboratory operations, sample tracking, and data management with 60% efficiency improvement.",
      technologies: ["Node.js", "Express.js", "GraphQL", "Apollo", "TypeScript", "PostgreSQL", "Prisma"],
      category: "enterprise",
      live: "https://test-lims-test-setup-front.vercel.app/auth/login",
      github: null,
      impact: "60% efficiency improvement",
      year: "2024"
    },
    {
      title: "Ersa Real Estate Platform",
      description: "Dynamic real estate website with integrated admin panel, user dashboard, and installment payment system for all stakeholders.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "AWS"],
      category: "real-estate",
      live: "https://realestate-plateform.ersaiss.com/en",
      github: null,
      impact: "Multi-stakeholder management",
      year: "2023"
    },
    {
      title: "Taskforce Management",
      description: "Task management website with real-time updates, collaborative features, and comprehensive progress tracking.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
      category: "productivity",
      live: "https://taskforce.ersaiss.com/",
      github: null,
      impact: "Real-time collaboration",
      year: "2023"
    },
    {
      title: "Auto Highline Car Website",
      description: "Car website integrated with admin panel for comprehensive content management and operations control.",
      technologies: ["Node.js", "Express.js", "Firebase"],
      category: "automotive",
      live: "https://toys-a6321.web.app/#/",
      github: null,
      impact: "Complete content management",
      year: "2023"
    },
    {
      title: "Ayat Donation Platform",
      description: "Comprehensive donation management platform with user-facing website and admin panel for efficient operation management.",
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS"],
      category: "non-profit",
      live: "https://ayt-donations-site-front.vercel.app/en",
      github: null,
      impact: "Streamlined donations",
      year: "2023"
    },
    {
      title: "Ayat HR Management",
      description: "Custom HR information system for employee operations management with modern HR application features.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Socket.IO"],
      category: "enterprise",
      live: "https://ayt-hr-front-prodv.vercel.app/en/login",
      github: null,
      impact: "Complete HR automation",
      year: "2023"
    },
    {
      title: "Mawared Industrial Platform",
      description: "Industrial platform with centralized admin panel managing landing pages, e-store, and supply chain systems.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Unit Testing"],
      category: "industrial",
      live: "https://maward-e-store-react-front.vercel.app/en",
      github: null,
      impact: "Unified control interface",
      year: "2023"
    },
    {
      title: "Profilaat Employment Platform",
      description: "Freelance and employment platform connecting freelancers and employers, similar to LinkedIn functionality.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
      category: "social",
      live: "https://mawared-employment-front.vercel.app/",
      github: null,
      impact: "Professional networking",
      year: "2023"
    },
    {
      title: "Sunnah Books Platform",
      description: "University graduation project for Prophet's Hadiths books with multilingual support, chat system, and blog features.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "React.js", "Flutter"],
      category: "educational",
      live: null,
      github: null,
      impact: "Cross-platform religious education",
      year: "2024"
    },
    {
      title: "Gap Analysis Platform",
      description: "Survey website for gathering citizen opinions on global digital transformation for strategic insights.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      category: "survey",
      live: "https://gapanalysis.ersaiss.com/#/",
      github: null,
      impact: "Public opinion analysis",
      year: "2023"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
    { id: 'ecommerce', label: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'real-estate', label: 'Real Estate', count: projects.filter(p => p.category === 'real-estate').length },
    { id: 'industrial', label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of enterprise-grade applications and scalable backend solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "hero" : "ghost"}
              size="sm"
              onClick={() => setFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:shadow-card transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.live && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-70 hover:opacity-100" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-70 hover:opacity-100" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="border-success/30 text-success bg-success/10">
                    <Zap className="w-3 h-3 mr-1" />
                    {project.impact}
                  </Badge>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-accent/50">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.live && (
                    <Button variant="tech" size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {!project.live && !project.github && (
                    <Button variant="glass" size="sm" className="flex-1" disabled>
                      <Users className="w-4 h-4" />
                      Enterprise Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fadeInUp">
          {[
            { number: "20+", label: "Projects Completed", icon: <Zap className="w-6 h-6" /> },
            { number: "4+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
            { number: "5M+", label: "Users Served", icon: <Users className="w-6 h-6" /> },
            { number: "15+", label: "Technologies", icon: <Code className="w-6 h-6" /> }
          ].map((stat, index) => (
            <Card key={index} className="glass-effect text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;