import { motion } from 'motion/react';
import { Download, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl mix-blend-screen opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl mix-blend-screen opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            Xer0byte &bull; Official Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-accent py-2 mb-2">
            Ghaznain Ahmad
          </h1>
          <h2 className="text-xl font-semibold text-foreground md:text-3xl block mb-8">
            Founder of Xer0byte &bull; AI Solutions, Python &amp; Web Developer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base font-medium text-muted-foreground sm:text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Welcome to <strong className="text-foreground font-semibold">Xer0byte</strong>, the technology solutions brand led by <strong className="text-foreground font-semibold">Ghaznain Ahmad</strong>. I specialize in building high-performance, user-focused web applications and custom AI solutions. Skilled in{" "}
            <span className="font-semibold text-accent">Python</span>,{" "}
            <span className="font-semibold text-accent">Machine Learning</span>,{" "}
            <span className="font-semibold text-accent">ReactJS</span>, and an expert in{" "}
            <span className="font-semibold text-accent">Automation</span>,{" "}
            <span className="font-semibold text-accent">AI Data Annotation</span>, and{" "}
            <span className="font-semibold text-accent">AutoCAD</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent/90 transition-all group"
            >
              Let's Talk
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-muted text-foreground font-semibold border border-border hover:bg-muted/80 transition-all group"
            >
              View Resume
              <Download size={20} className="ml-2 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
