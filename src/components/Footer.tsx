import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-foreground mb-2">Xer0byte</h2>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Ghaznain Ahmad. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/Xer0byte" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ghaznain-ahmad/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ghaznain1122@gmail.com" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
