import { Calendar, MapPin, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives me in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6 slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate B.Tech Computer Science student at Vidya Jyothi Institute of Technology, 
                Hyderabad, set to graduate in 2025. My journey in technology began with curiosity and has 
                evolved into a deep commitment to creating innovative solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm fascinated by the intersection of artificial intelligence and practical 
                problem-solving. I believe technology should be accessible, efficient, and meaningful to 
                people's lives.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Professional Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to innovative projects that leverage cutting-edge technologies 
                to solve real-world problems, particularly in areas of AI, web development, and system 
                optimization.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6 slide-up">
            <Card className="shadow-md hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      B.Tech Computer Science Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Vidya Jyothi Institute of Technology, Hyderabad
                    </p>
                    <p className="text-sm text-accent font-medium">2021 - 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">NPTEL Certifications</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Java Programming</li>
                      <li>• Database Management Systems</li>
                      <li>• Data Structures & Algorithms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Interests & Hobbies</h4>
                    <p className="text-muted-foreground">
                      Problem-solving, Open source contribution, AI research, 
                      System architecture design, Continuous learning
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;