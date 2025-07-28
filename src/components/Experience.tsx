import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "SQM Company",
    position: "Backend Developer",
    duration: "Aug 2021 – Present",
    location: "Suez, Egypt",
    type: "Full-time",
    description: "4 years of experience designing, building, and optimizing scalable backend systems for enterprise applications, real-time platforms, and cloud-based solutions.",
    achievements: [
      "Built 15+ projects including e-commerce platforms, HR systems, real estate portals, and medical/LIMS software with secure authentication (JWT, OAuth, MFA)",
      "Designed and managed SQL/NoSQL databases (MongoDB, PostgreSQL, MySQL), conducted migrations, and improved query performance",
      "Developed modular, testable, and scalable backend systems using TypeScript, Prisma ORM, and unit testing (Jest, Mocha)",
      "Deployed CI/CD pipelines (Git, Docker) and cloud services (AWS S3, Firebase) for high-availability applications",
      "Led backend development, mentored junior developers, and worked with cross-functional teams"
    ],
    notableProjects: [
      {
        name: "Ayat Workflow",
        description: "Designed a GraphQL-based workflow engine that reduced process time by 40%",
        impact: "40% reduction in process time"
      },
      {
        name: "Refee E-Commerce",
        description: "Scaled backend to handle 5M+ concurrent users with PayLink integration",
        impact: "5M+ concurrent users"
      },
      {
        name: "LIMS Portal",
        description: "Centralized lab data management, improving efficiency by 60%",
        impact: "60% efficiency improvement"
      }
    ],
    technologies: [
      "Node.js", "Express.js", "Nest.js", "TypeScript", "JavaScript",
      "MongoDB", "PostgreSQL", "MySQL", "GraphQL", "RESTful APIs",
      "AWS", "Docker", "Git", "Jest", "Mocha", "Socket.IO", "Prisma"
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building enterprise-grade solutions and leading backend development initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect animate-slideInUp">
            <CardContent className="p-8">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{experience.position}</h3>
                    <p className="text-lg text-primary-glow font-semibold">{experience.company}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-success/20 text-success border-success/30 self-start">
                  {experience.type}
                </Badge>
              </div>

              {/* Duration and Location */}
              <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {experience.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Strengths & Achievements:</h4>
                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Projects */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Notable Projects:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {experience.notableProjects.map((project, index) => (
                    <Card key={index} className="bg-muted/20 border-primary/20">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-primary-glow mb-2">{project.name}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <Badge variant="outline" className="text-xs border-success/30 text-success">
                          {project.impact}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/20 text-foreground hover:bg-primary/30 transition-colors text-xs font-medium border border-primary/30 dark:bg-primary/30 dark:text-primary-foreground dark:hover:bg-primary/40">
                        {tech}
                      </Badge>
                    ))}
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;