import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 lg:pt-24"
    >
      <div className="section-container text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent p-1 glow-effect">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <img
                src="/profile.jpg" // Update with your actual profile image path
                alt="John Doe Profile Picture"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient">Saddam Hussain</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Full Stack Developer & Frontend Developer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I craft impactful digital solutions by blending clean MERN stack
          development with intuitive UI/UX design. From creating dynamic web
          apps to optimizing websites for search engines, I focus on building
          scalable, user-centered experiences that drive results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="hero-gradient px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform glow-effect"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="https://github.com/Abdul-Majeed20"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-majeed-baloch/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="abdulmajeedbaloch315@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="ml-[40%] p-3 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center space-y-2 p-5"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
