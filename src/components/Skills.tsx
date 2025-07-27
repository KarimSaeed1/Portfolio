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
      skills: ["JavaScript", "TypeScript", "Node.js", "PHP", "Python", "C++", "HTML5", "CSS3", "Java", "Dart"]
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Frameworks & Libraries", 
      color: "success",
      skills: ["Express.js", "Nest.js", "Laravel", "React.js", "Socket.IO", "Apollo GraphQL", "Prisma", "Mongoose", "Flutter", "Next.js"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Query Languages",
      color: "tech-purple", 
      skills: ["MongoDB", "PostgreSQL", "MySQL", "GraphQL", "NoSQL", "SQL", "Redis", "Firebase Firestore"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Cloud Services",
      color: "tech-orange",
      skills: ["AWS Cloud Services", "Docker", "Firebase", "CI/CD", "Apache", "Git & GitHub", "Linux", "Vercel", "Heroku"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Development Tools & Testing",
      color: "warning",
      skills: ["Visual Studio", "VS Code", "Postman", "Unit Testing", "Jest", "Mocha", "NPM", "Composer", "Android Studio", "RESTful APIs"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills & Methodologies",
      color: "destructive",
      skills: ["Problem Solving", "Agile Development", "Software Design", "OOP", "Design Patterns", "Team Leadership", "Creative Thinking", "Project Management"]
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
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors text-xs font-medium border border-primary/20">
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