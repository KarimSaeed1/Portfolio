import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: "CS50: Computer Science Courses and Programs",
      issuer: "Harvard University",
      year: "2023",
      type: "Computer Science",
      status: "Completed"
    },
    {
      title: "EgFwd Embedded Professional Track Nanodegree",
      issuer: "Udacity",
      year: "2022",
      type: "Embedded Systems",
      status: "Completed"
    },
    {
      title: "The Complete Node.js Developer Course (3rd Edition)",
      issuer: "Udemy",
      year: "2023",
      type: "Backend Development",
      status: "Completed"
    },
    {
      title: "Computer Networks Fundamentals",
      issuer: "ITI Maharatech",
      year: "2022",
      type: "Networking",
      status: "Completed"
    },
    {
      title: "Programming for Everybody (Python)",
      issuer: "Coursera - University of Michigan",
      year: "2021",
      type: "Programming",
      status: "Completed"
    },
    {
      title: "Digital Marketing Professional Nanodegree Program",
      issuer: "Udacity",
      year: "2021",
      type: "Digital Marketing",
      status: "Completed"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'computer science':
        return 'tech-blue';
      case 'backend development':
        return 'success';
      case 'embedded systems':
        return 'tech-purple';
      case 'networking':
        return 'tech-orange';
      case 'programming':
        return 'primary';
      default:
        return 'warning';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:shadow-card transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <Badge 
                      variant="secondary" 
                      className={`bg-${getTypeColor(cert.type)}/20 text-${getTypeColor(cert.type)} border-${getTypeColor(cert.type)}/30 mb-2`}
                    >
                      {cert.type}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-glow transition-colors">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                    <Badge variant="outline" className="border-success/30 text-success bg-success/10">
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;