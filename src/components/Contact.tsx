import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "karimsaeed816@gmail.com",
      link: "mailto:karimsaeed816@gmail.com",
      color: "tech-blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+201550527057",
      link: "tel:+201550527057",
      color: "success"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Suez, Egypt",
      link: "https://www.google.com/maps/place/Suez,+Egypt",
      color: "tech-purple"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      url: "https://github.com/KarimSaeed1",
      username: "@KarimSaeed1"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn", 
      url: "https://www.linkedin.com/in/kareem-saeed-a4869a195/",
      username: "Kareem Saeed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? 
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-effect hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-${info.color}/20 text-${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          target={info.title === "Location" ? "_blank" : undefined}
                          rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold">{social.title}</h5>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full animate-glow">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can bring your ideas to life with scalable, 
                efficient backend solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:karimsaeed816@gmail.com">
                    <Mail className="w-5 h-5" />
                    Start a Conversation
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="tel:+201550527057">
                    <Phone className="w-5 h-5" />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;