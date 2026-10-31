import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left max-w-md">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Xer0<span className="text-accent">byte</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            Official technology and AI development portfolio of Ghaznain Ahmad. Specializing in intelligent AI solutions, Python automation, and modern web applications.
          </p>
          <p className="text-muted-foreground/80 text-xs">
            &copy; {new Date().getFullYear()} Xer0byte &bull; Ghaznain Ahmad. All rights reserved.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0 text-sm font-medium text-muted-foreground">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com/Xer0byte" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Visit Xer0byte GitHub profile"
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ghaznain-ahmad/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Visit Ghaznain Ahmad LinkedIn profile"
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:ghaznain1122@gmail.com" 
            aria-label="Send an email to Ghaznain Ahmad"
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
