import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = `#${section}`;
        }
      }
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter text-foreground z-50">
          Xer0<span className="text-accent">byte</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-border backdrop-blur-md bg-background/50">
          <ul className="flex gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.href)}
                  className={`relative z-10 block px-4 py-2 rounded-full transition-colors ${
                    activeTab === item.href ? 'text-background' : 'text-foreground hover:text-accent'
                  }`}
                >
                  {activeTab === item.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 rounded-full bg-muted text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, pointerEvents: "auto" },
            closed: { opacity: 0, y: -20, pointerEvents: "none" }
          }}
          className="absolute top-full left-0 right-0 mt-4 mx-6 p-4 rounded-2xl bg-muted/90 backdrop-blur-lg border border-border md:hidden shadow-xl"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.href);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl transition-colors ${
                    activeTab === item.href ? 'bg-accent text-background font-medium' : 'text-foreground hover:bg-background/50'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
