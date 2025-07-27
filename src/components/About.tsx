import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Built 15+ projects including e-commerce platforms, HR systems, and medical software",
      color: "tech-blue"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Optimization", 
      description: "Expert in SQL/NoSQL databases with proven performance improvements",
      color: "success"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "Deployed CI/CD pipelines and cloud services for high-availability applications",
      color: "tech-purple"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "System Architecture",
      description: "Developed modular, scalable backend systems using modern technologies",
      color: "tech-orange"
    }
  ];

  const achievements = [
    "4+ Years Professional Experience",
    "15+ Successful Projects Delivered", 
    "40% Process Time Reduction (Ayat Workflow)",
    "5M+ Concurrent Users Handled (Refee E-Commerce)",
    "60% Efficiency Improvement (LIMS Portal)"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building scalable systems and solving complex problems with a passion for efficient, elegant solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6">4+ Years Professional Experience</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a Backend Developer with extensive hands-on experience designing, building, and optimizing 
              scalable server-side solutions. My expertise spans Node.js, Express.js, Nest.js, MongoDB, 
              PostgreSQL, RESTful APIs, and GraphQL, with advanced skills in database design, cloud services, 
              and real-time systems.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Throughout my career, I've demonstrated a strong foundation in software architecture, performance 
              optimization, and secure API development through numerous projects spanning e-commerce, HR systems, 
              real estate platforms, and enterprise workflow automation.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg mb-4">Key Achievements:</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6 animate-slideInRight">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-effect hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${highlight.color}/20 text-${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 animate-fadeInUp">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Academic Background</h3>
                  <h4 className="text-xl font-semibold text-primary-glow mb-2">
                    Bachelor's Degree in Computer Science
                  </h4>
                  <p className="text-muted-foreground mb-2">Suez Canal University</p>
                  <p className="text-sm text-muted-foreground mb-4">Sep 2019 - Jul 2024 | Ismailia, Egypt</p>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    GPA: 3.0
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Notable Certifications:</h4>
                  <div className="space-y-2">
                    {[
                      "CS50: Computer Science Courses (Harvard)",
                      "Complete Node.js Developer Course (Udemy)",
                      "Programming for Everybody - Python (Coursera)",
                      "Digital Marketing Nanodegree (Udacity)"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;