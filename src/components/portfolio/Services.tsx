import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Brain, Database, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like React, Node.js, and cloud platforms for scalable and responsive applications.',
      icon: Globe,
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'API Development',
        'Database Integration',
      ],
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      id: 2,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from desktop applications to complex system integrations.',
      icon: Code,
      features: [
        'Custom Applications',
        'System Integration',
        'Code Optimization',
        'Testing & Debugging',
      ],
      color: 'bg-green-500/10 text-green-600',
    },
    {
      id: 3,
      title: 'AI Solutions',
      description: 'Intelligent solutions using machine learning and AI to automate processes and provide data-driven insights for your business.',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Data Analysis',
        'Process Automation',
        'Predictive Analytics',
      ],
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management to ensure your data is secure, accessible, and well-organized.',
      icon: Database,
      features: [
        'Database Design',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
      ],
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and migration services using AWS and Azure for scalable and cost-effective solutions.',
      icon: Zap,
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Performance Monitoring',
        'Cost Optimization',
      ],
      color: 'bg-cyan-500/10 text-cyan-600',
    },
    {
      id: 6,
      title: 'Mobile App Consulting',
      description: 'Strategic consulting for mobile application development, including architecture planning and technology selection.',
      icon: Smartphone,
      features: [
        'Architecture Planning',
        'Technology Selection',
        'Performance Strategy',
        'Development Guidance',
      ],
      color: 'bg-pink-500/10 text-pink-600',
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group shadow-md hover:shadow-glow transition-smooth scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border slide-up">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Why Choose My Services?</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Fast Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  Efficient development process with timely delivery and regular updates
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quality Code</h4>
                <p className="text-muted-foreground text-sm">
                  Clean, maintainable, and well-documented code following best practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Leveraging latest technologies and innovative approaches to solve problems
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-navy font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;