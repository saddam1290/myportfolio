import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email" }
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Saddam Hussain</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & Frontend developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> 
              © {currentYear}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. Designed for performance and accessibility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;