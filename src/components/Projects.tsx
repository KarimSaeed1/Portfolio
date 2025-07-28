import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Calendar, Users, Zap, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // Enterprise Projects
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
      title: "Ayat Inventory",
      description: "Warehouse Management System to streamline inventory storage and movement within warehouses with robust features.",
      technologies: ["Node.js", "Express.js", "GraphQL", "Apollo", "TypeScript", "PostgreSQL", "Prisma"],
      category: "enterprise",
      live: "https://dev-lims-inventory-front.vercel.app/auth/login",
      github: null,
      impact: "Inventory optimization",
      year: "2024"
    },
    {
      title: "Ayat Portal",
      description: "Secure centralized user management platform to manage user accounts, permissions, and licenses across network of websites.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "AWS S3"],
      category: "enterprise",
      live: "https://dev-ayt-portal-user-management-front.vercel.app/login",
      github: null,
      impact: "Centralized authentication",
      year: "2024"
    },
    {
      title: "LIMS Portal",
      description: "Secure centralized user management platform for Laboratory Information Management System with license-based access control.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "AWS S3", "Socket.IO"],
      category: "enterprise",
      live: "https://dev-lims-portal-user-management-front.vercel.app/",
      github: null,
      impact: "Multi-system integration",
      year: "2024"
    },
    {
      title: "Insnd Finance Platform",
      description: "Comprehensive finance management platform to handle all financial operations including salary administration and payment processing.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      category: "enterprise",
      live: null,
      github: null,
      impact: "Financial centralization",
      year: "2023"
    },

    // E-Commerce Projects
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

    // Real Estate Projects
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
      title: "Akhawen Real Estate",
      description: "Comprehensive real estate platform with robust admin panel for managing operations and detailed dashboard for metrics review.",
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS"],
      category: "real-estate",
      live: "https://akhawen.com/",
      github: null,
      impact: "Streamlined payments",
      year: "2023"
    },

    // Educational Projects
    {
      title: "Sunnah Books Platform",
      description: "University graduation project for Prophet's Hadiths books with multilingual support, chat system, and blog features using modern tech stack.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "React.js", "Flutter"],
      category: "educational",
      live: null,
      github: null,
      impact: "Cross-platform religious education",
      year: "2024"
    },

    // Industrial Projects
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
      title: "Mawared Supply Chain",
      description: "Comprehensive industrial platform integrating landing pages, e-commerce store, and supply chain management functionalities.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Unit Testing"],
      category: "industrial",
      live: "https://supply-chain-front2024.vercel.app/",
      github: null,
      impact: "Full-cycle operations",
      year: "2024"
    },
    {
      title: "MLNC Industrial Platform",
      description: "Industrial platform with comprehensive admin panel for centralized management of multiple interconnected sites.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Unit Testing"],
      category: "industrial",
      live: "https://dev-mlnc-admin-front.vercel.app/#",
      github: null,
      impact: "Streamlined operations",
      year: "2024"
    },
    {
      title: "MLNC Supply Chain",
      description: "Integrated industrial platform with admin panel for centralized management and control of supply chain systems.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Unit Testing"],
      category: "industrial",
      live: "https://dev-mlnc-supply-chain-front.vercel.app/",
      github: null,
      impact: "Supply chain optimization",
      year: "2024"
    },
    {
      title: "Medica Medical Platform",
      description: "Medical platform with admin panel to manage multiple integrated sites including landing pages, e-store, and supply chain systems.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Unit Testing"],
      category: "medical",
      live: null,
      github: null,
      impact: "Medical industry solutions",
      year: "2023"
    },

    // Social & Employment
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

    // Productivity & Communication
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
      title: "Anjez Task Management",
      description: "Full-featured task management web application enabling users to create, assign, track, and manage tasks with real-time updates.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
      category: "productivity",
      live: null,
      github: null,
      impact: "Team collaboration",
      year: "2023"
    },
    {
      title: "Ayat Chat System",
      description: "Robust chat system for Ayat to facilitate seamless communication and real-time interactions with group chat support.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.io"],
      category: "communication",
      live: "https://dev-lims-chat-front.vercel.app/signIn",
      github: null,
      impact: "Real-time communication",
      year: "2024"
    },

    // Non-Profit
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

    // Automotive
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

    // Survey & Analytics
    {
      title: "Gap Analysis Platform",
      description: "Survey website for gathering citizen opinions on global digital transformation for strategic insights.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      category: "survey",
      live: "https://gapanalysis.ersaiss.com/#/",
      github: null,
      impact: "Public opinion analysis",
      year: "2023"
    },

    // Desktop Applications
    {
      title: "Tickety Reservation System",
      description: "Desktop application for ticket reservations with QR code generation and validation system for events.",
      technologies: ["Vue.js", "Firebase"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Secure ticket validation",
      year: "2023"
    },
    {
      title: "English Memorize System",
      description: "Desktop application to facilitate and enhance the process of memorizing English words with efficient learning features.",
      technologies: ["C++", "Qt"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Language learning enhancement",
      year: "2022"
    },
    {
      title: "Ball Game Application",
      description: "Interactive desktop application featuring a ball game with dynamic direction changes and challenging gameplay mechanics.",
      technologies: ["Python", "Tkinter"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Engaging gameplay",
      year: "2022"
    },
    {
      title: "Cup Tracking Application",
      description: "Desktop application designed to track cups using advanced tracking algorithms with real-time video processing.",
      technologies: ["Python", "Tkinter", "NumPy", "YOLO v7", "Deep Sort"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Object tracking innovation",
      year: "2022"
    },
    {
      title: "Face Detection Application",
      description: "Desktop application to detect and classify happy and sad facial expressions in real-time video streams.",
      technologies: ["Python", "Tkinter", "NumPy", "YOLO v7"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Real-time emotion detection",
      year: "2022"
    },
    {
      title: "University System",
      description: "Command-line application for managing university student data with comprehensive CRUD operations and academic tracking.",
      technologies: ["C++", "SQLite"],
      category: "desktop",
      live: null,
      github: null,
      impact: "Student data management",
      year: "2021"
    },

    // Web Applications
    {
      title: "Notaty Notes Management",
      description: "Web-based application to manage personal notes with essential operations like adding, updating, deleting, and viewing notes.",
      technologies: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "web",
      live: null,
      github: null,
      impact: "Personal productivity",
      year: "2022"
    },
    {
      title: "Movieno Information Website",
      description: "Comprehensive movie website to keep users updated with latest news, movie releases, and detailed film information.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "web",
      live: null,
      github: null,
      impact: "Movie information hub",
      year: "2022"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
    { id: 'ecommerce', label: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'real-estate', label: 'Real Estate', count: projects.filter(p => p.category === 'real-estate').length },
    { id: 'industrial', label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
    { id: 'productivity', label: 'Productivity', count: projects.filter(p => p.category === 'productivity').length },
    { id: 'desktop', label: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
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
            A comprehensive showcase of 32+ enterprise-grade applications and scalable solutions
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
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/20 dark:bg-primary/30 dark:text-primary-foreground">
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
                      {project.category === 'desktop' ? 'Desktop App' : 'Enterprise Project'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 animate-fadeInUp">
          {[
            { number: "32+", label: "Projects Completed", icon: <Zap className="w-6 h-6" /> },
            { number: "4+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> }
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