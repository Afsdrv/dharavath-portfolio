import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Express.js'],
      color: 'bg-green-500/10 text-green-600',
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'AWS', 'Azure', 'Firebase'],
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'scikit-learn', 'Python ML', 'Data Analysis'],
      color: 'bg-orange-500/10 text-orange-600',
    },
  ];

  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Database Management', level: 80 },
    { name: 'Machine Learning', level: 75 },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="shadow-md hover:shadow-glow transition-smooth scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto rounded-lg ${category.color} flex items-center justify-center mb-3`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Software Engineering Principles',
              'System Design',
              'API Development',
              'Version Control (Git)',
              'Agile Methodology',
              'Problem Solving',
              'Code Optimization',
              'Testing & Debugging',
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-smooth fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;