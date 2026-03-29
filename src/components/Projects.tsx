import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot built with Python, LangChain, and OpenAI API, capable of handling customer inquiries and automating support tasks.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&h=600&auto=format&fit=crop",
    tags: ["Python", "LangChain", "OpenAI", "React"],
    github: "https://github.com/Xer0byte",
    demo: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data with interactive visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/Xer0byte",
    demo: "#"
  },
  {
    title: "Predictive Analytics Model",
    description: "A machine learning model designed to predict market trends and customer behavior, helping businesses make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&auto=format&fit=crop",
    tags: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    github: "https://github.com/Xer0byte",
    demo: "#"
  },
  {
    title: "Architectural 3D Model",
    description: "A detailed 3D architectural model and floor plan designed using AutoCAD and Revit for a modern residential complex.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=600&auto=format&fit=crop",
    tags: ["AutoCAD", "Revit", "3D Modeling", "Architecture"],
    github: "https://github.com/Xer0byte",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Projects</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            Here are some of my recent projects, showcasing my skills in AI/ML, web development, and engineering design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-accent/50 transition-all shadow-sm hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:text-accent transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
