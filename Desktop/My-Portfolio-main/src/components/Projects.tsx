import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Redux", "Firebase", "Tailwind" , "DummyJSON"],
      image: "/E-com.png",
      liveUrl: "https://my-ecom-project.vercel.app/",
      githubUrl: "https://github.com/Abdul-Majeed20/My-Ecom-Project.git",
    },
    {
      title: "OLX Clone",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "css"],
      image: "/olx.png",
      liveUrl: "https://olx-clone1-7s38js8io-saddam1290s-projects.vercel.app/",
      githubUrl: "https://github.com",
    },
    {
      title: "Bookme.com UI Clone",
      description:
        "A beautiful weather dashboard with interactive charts, location-based forecasts, and responsive design optimized for all devices.",
      technologies: ["React", "next.js", "Tailwind"],
      image: "/Bookme.png",
      liveUrl: "https://bookme-com-clone.vercel.app/",
      githubUrl: "",
    },
    {
      title: "React Social Media App",
      description:
        "A modern, responsive portfolio website showcasing clean design principles and smooth animations built with React and Tailwind CSS.",
      technologies: ["React", "Bootstrap", "DummyJSON", "Vite"],
      image: "/SocialMedia.png",
      liveUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work that showcases my skills and passion
            for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-professional overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-60 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md border border-gray-200">
                    <img
                      src={project.image}
                      alt="Project Image"
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/60 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
