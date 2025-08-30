import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-picture.jpg';
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan/20 to-cyan-light/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-light/15 to-cyan/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--cyan)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--cyan-light)/0.08),transparent_50%)]"></div>
      </div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/5 to-navy/10 backdrop-blur-[0.5px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-cyan-light">
              <Sparkles className="h-4 w-4" />
              Available for new opportunities
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-accent bg-clip-text text-transparent">ddDharavath</span>
                  <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-lg -z-10"></div>
                </span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  A passionate <span className="text-cyan-light font-semibold">software developer</span> specializing in programming, web development, and AI solutions.
                </p>
                
                {/* Floating Skills Pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                  {['Python', 'React', 'AI/ML', 'Cloud'].map((skill, index) => <div key={skill} className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 transition-all duration-300" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                      {skill}
                    </div>)}
                </div>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={scrollToPortfolio} size="lg" className="group relative overflow-hidden bg-gradient-accent hover:shadow-xl hover:shadow-cyan/25 text-navy font-semibold transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <Code2 className="mr-2 h-5 w-5" />
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button onClick={scrollToContact} variant="outline" size="lg" className="group border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              {[{
              icon: Github,
              href: "https://github.com/dharavathraghavendra",
              label: "GitHub Profile"
            }, {
              icon: Linkedin,
              href: "https://linkedin.com/in/dharavath-raghavendra",
              label: "LinkedIn Profile"
            }, {
              icon: Mail,
              href: "mailto:raghavendradharavath2@gmail.com",
              label: "Email"
            }].map(({
              icon: Icon,
              href,
              label
            }, index) => <Button key={label} variant="ghost" size="icon" className="relative group text-white/70 hover:text-white transition-all duration-300 hover:scale-110" asChild>
                  <a href={href} target={href.startsWith('mailto:') ? undefined : "_blank"} rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"} aria-label={label}>
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <Icon className="h-5 w-5 relative z-10" />
                  </a>
                </Button>)}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative group">
              {/* Animated Background Elements */}
              <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan/10 to-cyan-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glass Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-hero overflow-hidden shadow-2xl">
                    <img src={profileImage} alt="Dharavath Raghavendra - Software Developer" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-accent rounded-full animate-bounce delay-300 opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-light/60 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-white/40 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer">
          <span className="text-xs font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;