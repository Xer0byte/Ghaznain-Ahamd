import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Happy Clients', value: '302' },
    { label: 'Projects', value: '211' },
    { label: 'Hours Of Support', value: '1463' },
    { label: 'Awards', value: '24' },
  ];

  const info = [
    { label: 'Birthday', value: '31 OCT 2005' },
    { label: 'Age', value: '20' },
    { label: 'Degree', value: 'Bachelor 2024-28' },
    { label: 'City', value: 'Lahore, Pakistan' },
    { label: 'Email', value: 'ghaznain1122@gmail.com' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Website', value: 'xer0byte.netlify.app' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">About Me</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            I am an AI/ML Engineer, Web Developer, and Automation Specialist passionate about building practical AI solutions. I design intelligent agents, develop modern web applications, and apply engineering precision through AutoCAD and 3D design to create impactful digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative rounded-full overflow-hidden border-4 border-accent/20 aspect-square w-full max-w-[350px] group shadow-xl bg-muted/50">
              <img
                src="/profile.png"
                alt="Ghaznain Ahmad"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">AI/ML Engineer & Web Developer.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {info.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight size={18} className="text-accent" />
                  <span className="font-semibold text-foreground min-w-[100px]">{item.label}:</span>
                  <span className="text-muted-foreground break-all">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-muted/50 border border-border text-center hover:bg-muted transition-colors">
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
