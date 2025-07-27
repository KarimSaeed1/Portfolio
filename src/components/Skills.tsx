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
      skills: ["JavaScript", "TypeScript", "Node.js", "PHP", "Python", "C++", "HTML", "CSS"]
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Frameworks & Libraries", 
      color: "success",
      skills: ["Express.js", "Nest.js", "Laravel", "React", "Socket.IO", "Apollo", "Prisma", "Mongoose"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      color: "tech-purple", 
      skills: ["MongoDB", "PostgreSQL", "MySQL", "GraphQL", "NoSQL", "SQL"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Cloud",
      color: "tech-orange",
      skills: ["AWS Cloud Services", "Docker", "Firebase", "CI/CD", "Apache", "Git & Github"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Testing",
      color: "warning",
      skills: ["Visual Studio", "VS Code", "Postman", "Unit Testing", "Jest", "Mocha", "NPM", "Composer"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills & Methodologies",
      color: "destructive",
      skills: ["Problem Solving", "Agile", "Software Design", "OOP", "Design Patterns", "Leadership", "Creative Thinking"]
    }
  ];

  const certifications = [
    "CS50: Computer Science Courses and Programs from Harvard",
    "Udacity: EgFwd Embedded Professional Track Nanodegree", 
    "Udemy: The Complete Node.js Developer Course (3rd Edition)",
    "ITI Maharatech: Computer Networks Fundamentals",
    "Coursera: Programming for Everybody (Python)",
    "Udacity: Digital Marketing Professional Nanodegree Program"
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
            <Card key={index} className="glass-effect hover:shadow-card transition-all duration-300 group animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-accent/50 hover:bg-accent transition-colors text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <div className="mb-16 animate-fadeInUp">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-gradient">Languages</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇪🇬</span>
                    <span className="font-semibold">Arabic</span>
                  </div>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    Native
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-semibold">English</span>
                  </div>
                  <Badge variant="secondary" className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">
                    Professional
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="animate-fadeInUp">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Certifications & <span className="text-gradient">Learning</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;