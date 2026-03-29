import { motion } from 'motion/react';
import { BrainCircuit, Code, ShieldCheck, BarChart, PenTool, Building2, Database, Layout, Search, FileText, Edit, Video } from 'lucide-react';

const services = [
  {
    title: "AI & Machine Learning Solutions",
    description: "I offer AI and Machine Learning services tailored to real-world applications. From predictive analytics to NLP and computer vision, I design intelligent models that drive automation and innovation.",
    icon: BrainCircuit
  },
  {
    title: "Automation & Workflow Optimization",
    description: "I specialize in developing automation scripts and tools to streamline repetitive tasks, saving time and improving efficiency. With Python, APIs, and RPA, I create custom solutions.",
    icon: Code
  },
  {
    title: "Cybersecurity & Penetration Testing",
    description: "I provide security testing services to identify vulnerabilities in web applications, networks, and systems. Using advanced tools and methodologies, I perform penetration testing.",
    icon: ShieldCheck
  },
  {
    title: "Data Visualization & Dashboard Development",
    description: "I design interactive dashboards using Python (Matplotlib, Seaborn, Plotly) and BI tools (Power BI, Tableau) that turn complex data into clear insights.",
    icon: BarChart
  },
  {
    title: "Graphic Design & Branding Solutions",
    description: "I create professional graphics, logos, and branding materials that reflect your unique identity. With creativity and technical expertise, I deliver designs that engage your audience.",
    icon: PenTool
  },
  {
    title: "Architectural & Engineering Design",
    description: "I provide architectural, civil, and mechanical engineering solutions. With AutoCAD and Revit expertise, I design innovative architectural layouts, site plans, and sustainable water supply.",
    icon: Building2
  },
  {
    title: "Python Data Analysis Services",
    description: "I provide Python Data Analysis Services using Pandas, NumPy, and Matplotlib. My services include data cleaning, visualization, and statistical analysis.",
    icon: Database
  },
  {
    title: "Web Development Services",
    description: "I develop responsive, user-friendly websites using HTML, CSS, JavaScript, and PHP. My services include portfolio sites, business websites, and e-commerce platforms.",
    icon: Layout
  },
  {
    title: "SEO Optimization Services",
    description: "I provide SEO services including keyword research, on-page and off-page optimization, and technical SEO audits to improve visibility and ranking in search engines.",
    icon: Search
  },
  {
    title: "Comprehensive MS Office Services",
    description: "I provide MS Office services including document preparation, Excel analysis, PowerPoint presentations, and database management with efficient workflows.",
    icon: FileText
  },
  {
    title: "Professional Content Writing Services",
    description: "I create engaging articles, blog posts, and web content tailored to your audience, ensuring well-researched, accurate, and compelling writing.",
    icon: Edit
  },
  {
    title: "Professional Video Editing Services",
    description: "I provide video editing services including transitions, color correction, audio enhancement, and effects to create engaging and professional videos.",
    icon: Video
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Services</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            I offer a wide range of services to help you build, optimize, and scale your digital presence. From AI solutions to web development and engineering design, I have the expertise to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
