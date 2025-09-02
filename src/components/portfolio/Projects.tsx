import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Car, Edit, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Parking System',
      description: 'An intelligent parking management system designed to optimize parking space usage and reduce traffic congestion through real-time monitoring and automated space allocation.',
      icon: Car,
      technologies: ['Python', 'IoT Sensors', 'Database Management', 'Real-time Processing'],
      features: [
        'Real-time parking space monitoring',
        'Automated space allocation',
        'Traffic congestion reduction',
        'User-friendly interface',
      ],
      githubUrl: 'https://github.com/Afsdrv/smartparking',
      status: 'Completed',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      id: 2,
      title: 'Two-Way Writing Machine',
      description: 'An innovative mechanical system that replicates real-time writing on another surface, demonstrating advanced engineering principles and precision control mechanisms.',
      icon: Edit,
      technologies: ['Mechanical Engineering', 'Control Systems', 'Arduino', 'Motor Control'],
      features: [
        'Real-time writing replication',
        'Precision motor control',
        'Mechanical synchronization',
        'Innovative design approach',
      ],
      githubUrl: '#',
      status: 'Completed',
      color: 'bg-green-500/10 text-green-600',
    },
    {
      id: 3,
      title: 'AI Healthcare Chatbot',
      description: 'An intelligent healthcare assistant that helps patients with basic diagnosis, appointment scheduling, and medication reminders using natural language processing.',
      icon: Bot,
      technologies: ['Python', 'NLP', 'Machine Learning', 'Healthcare APIs', 'Chatbot Framework'],
      features: [
        'Basic medical diagnosis assistance',
        'Appointment scheduling',
        'Medication reminders',
        'Natural language interaction',
      ],
      githubUrl: '#',
      status: 'In Development',
      color: 'bg-purple-500/10 text-purple-600',
    },
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my notable projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group shadow-md hover:shadow-glow transition-smooth scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex-1 group/btn bg-accent hover:bg-accent/90"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or collaborating?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-navy font-semibold"
            asChild
          >
            <a
              href="https://github.com/Afsdrv/smartparking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;