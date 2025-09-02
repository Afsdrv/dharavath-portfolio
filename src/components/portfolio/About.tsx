import { Calendar, MapPin, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science Engineering student with expertise in Python, Java, C++, and JavaScript. Certified in Database Management and Cloud Computing, I've built innovative projects like Smart Parking Systems and AI Healthcare Chatbots, eager to contribute to impactful software development.
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
                    <h4 className="font-semibold text-foreground mb-3">Education</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-muted-foreground font-medium">
                          B.Tech Computer Science Engineering
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Vidya Jyothi Institute of Technology, Hyderabad
                        </p>
                        <p className="text-sm text-accent font-medium">2022 - 2025</p>
                        <p className="text-sm text-muted-foreground">CGPA: 7.8/10</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium">
                          Diploma in Computer Science Engineering
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Government Polytechnic College
                        </p>
                        <p className="text-sm text-accent font-medium">2019 - 2022</p>
                        <p className="text-sm text-muted-foreground">CGPA: 8.1/10</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium">
                          Secondary School Certificate (10th Class)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Govt High School, Huzurnagar
                        </p>
                        <p className="text-sm text-accent font-medium">2018 - 2019</p>
                        <p className="text-sm text-muted-foreground">GPA: 9.0/10</p>
                      </div>
                    </div>
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
                      <li>• Programming in Java</li>
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