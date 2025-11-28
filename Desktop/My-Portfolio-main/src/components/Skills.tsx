import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 60 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Vs Code", level: 75 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js",  
    "Tailwind CSS", "Next.js",  "Postman",
    "Git", "Vs Code", "MongoDB", "Express", "REST APIs"
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-professional p-6 space-y-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-center mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;