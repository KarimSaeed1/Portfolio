import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Globe } from 'lucide-react';

const Languages = () => {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multilingual communication for global collaboration
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Language Proficiency</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center justify-between p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🇪🇬</span>
                    <div>
                      <span className="font-semibold text-lg">Arabic</span>
                      <p className="text-sm text-muted-foreground">Mother Tongue</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30 font-semibold">
                    Native
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🇬🇧</span>
                    <div>
                      <span className="font-semibold text-lg">English</span>
                      <p className="text-sm text-muted-foreground">Professional Working</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-tech-blue/20 text-tech-blue border-tech-blue/30 font-semibold">
                    Professional
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Languages;