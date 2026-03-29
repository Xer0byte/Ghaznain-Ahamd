import { motion } from 'motion/react';

const education = [
  {
    title: "Bachelor's of Computer Science",
    year: "2024 - 2028",
    institution: "NCBA&E, Lahore",
    description: "Equips students with strong foundations in computer science, including programming, data structures, algorithms, AI/ML, web development, and database management."
  },
  {
    title: "Intermediate in Computer Science (ICS)",
    year: "2023 - 2024",
    institution: "GC University (GCU), Lahore",
    description: "Built a strong foundation in analytical thinking, problem-solving, and computational principles."
  },
  {
    title: "Matriculation with Computer Science",
    year: "2022 - 2023",
    institution: "Allied School, Saddar Campus, Lahore",
    description: "Gained foundational knowledge in computer fundamentals, programming, and problem-solving."
  },
  {
    title: "AutoCAD with Revit",
    year: "2023",
    institution: "NAVTTC",
    description: "Fundamentals of AutoCAD and Revit, covering essential concepts and techniques in architectural, civil, and mechanical design."
  }
];

const experience = [
  {
    title: "Founder & Lead Developer",
    company: "Xer0byte",
    year: "Jan 2022 – Present",
    location: "Lahore, Pakistan",
    description: [
      "Lead development of AI-powered applications, automation tools, and modern web solutions.",
      "Built scalable web apps using Python, React, FastAPI, and databases (SQL, MongoDB).",
      "Designed and deployed AI/ML models for predictive analytics and business intelligence."
    ]
  },
  {
    title: "Freelance Web Developer & AI Specialist",
    company: "Upwork",
    year: "Oct 2022 – Present",
    location: "Remote",
    description: [
      "Delivered custom websites, chatbots, and AI-integrated solutions tailored to client requirements.",
      "Hands-on experience with Python, LangChain, OpenAI API, and modern frontend frameworks."
    ]
  },
  {
    title: "AutoCAD Engineer",
    company: "Benchmark | Innovative Engineering Solutions",
    year: "Jun 2024 - Present",
    location: "Lahore, Pakistan",
    description: [
      "AutoCAD 2D & 3D Structural Design, Plumbing & Drainage Systems, Blueprint Drafting.",
      "Designed water supply and drainage systems with focus on accuracy and functionality."
    ]
  },
  {
    title: "Data Analyst (Python Specialist)",
    company: "Freelance",
    year: "Oct 2023 - May 2024",
    location: "Remote",
    description: [
      "Video Downsampling Integration for Testing Pipeline.",
      "Data Cleaning, Python Visualization (Matplotlib, Seaborn)."
    ]
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Resume</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            My experience spans across AI/ML engineering, full-stack web development, and mechanical/architectural design using AutoCAD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Education</h3>
            <div className="space-y-8 border-l-2 border-border pl-6 relative">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                  <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-accent mb-3">{item.year}</div>
                  <p className="italic text-foreground/80 mb-3 text-sm">{item.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Experience</h3>
            <div className="space-y-8 border-l-2 border-border pl-6 relative">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                  <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-accent mb-3">{item.year}</div>
                  <p className="italic text-foreground/80 mb-3 text-sm">{item.company} | {item.location}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm leading-relaxed">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
