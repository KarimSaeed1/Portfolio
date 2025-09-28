import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Wrench, Cog, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      color: "tech-blue",
      skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS"]
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Frameworks & Libraries", 
      color: "success",
      skills: ["Node.js", "React.js", "Express.js", "Nest.js", "Laravel", "Socket.IO", "Prisma", "Mongoose"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Query Languages",
      color: "tech-purple", 
      skills: ["MongoDB", "PostgreSQL", "MySQL", "GraphQL", "NoSQL", "SQL", "Firebase"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Cloud Services",
      color: "tech-orange",
      skills: ["AWS Cloud Services", "Docker", "Firebase", "CI/CD", "Git & GitHub", "Linux"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Development Tools & Testing",
      color: "warning",
      skills: ["Visual Studio", "VS Code", "Postman", "Unit Testing", "Microsoft Office Suite", "Debugging", "Claude & ChatGpt"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Computer Science & Methodologies",
      color: "destructive",
      skills: ["Data Structure", "Algorithms", "Problem Solving", "Agile", "Software Design", "OOP", "Design Patterns", "Creative Thinking", "Database Design"]
    }
  ];


  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, efficient, and modern backend solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect hover:shadow-card transition-all duration-300 group hover-lift animate-zoomIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 text-${category.color} group-hover:scale-110 transition-transform duration-300 hover-scale`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/20 text-foreground hover:bg-primary/30 transition-colors text-xs font-medium border border-primary/30 dark:bg-primary/30 dark:text-primary-foreground dark:hover:bg-primary/40 hover-scale">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;