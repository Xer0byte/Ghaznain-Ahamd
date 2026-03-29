import { motion } from 'motion/react';
import { SiCisco, SiCoursera, SiKaggle, SiUdemy, SiGooglecloud } from 'react-icons/si';
import { FaCertificate, FaGraduationCap, FaMicrosoft, FaLinkedin, FaUniversity, FaBriefcase, FaBuilding, FaLaptopCode } from 'react-icons/fa';

const certifications = [
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "Sep 2025", icon: FaCertificate, color: "#0530AD" },
  { title: "Introduction to Modern AI", issuer: "Cisco", date: "Aug 2025", icon: SiCisco, color: "#1BA0D7" },
  { title: "Digital Marketing Fundamentals", issuer: "Simplilearn", date: "Aug 2025", icon: FaGraduationCap, color: "#0072C6" },
  { title: "Make data available in Azure Machine Learning", issuer: "Microsoft", date: "Aug 2025", icon: FaMicrosoft, color: "#00A4EF" },
  { title: "LinkedIn Content and Creative Design", issuer: "LinkedIn", date: "Aug 2025", icon: FaLinkedin, color: "#0A66C2" },
  { title: "Introduction to AI concepts", issuer: "Microsoft", date: "Jul 2025", icon: FaMicrosoft, color: "#00A4EF" },
  { title: "Digital Marketing Strategy", issuer: "Simplilearn", date: "Aug 2025", icon: FaGraduationCap, color: "#0072C6" },
  { title: "Data Structures and Algorithms", issuer: "Simplilearn", date: "Aug 2025", icon: FaGraduationCap, color: "#0072C6" },
  { title: "Google Ads for Beginners", issuer: "Coursera", date: "Jul 2025", icon: SiCoursera, color: "#0056D2" },
  { title: "Introduction to Artificial Intelligence With Python", issuer: "HarvardX", date: "Jun 2025", icon: FaUniversity, color: "#A51C30" },
  { title: "Use AI for Everyday Tasks", issuer: "Microsoft", date: "Mar 2025", icon: FaMicrosoft, color: "#00A4EF" },
  { title: "Website with Wordpress", issuer: "Coursera", date: "Jun 2025", icon: SiCoursera, color: "#0056D2" },
  { title: "Frontend Development Intern", issuer: "YoungDev Intern", date: "Jul 2025", icon: FaBriefcase, color: "#FF9800" },
  { title: "Python Coder", issuer: "Kaggle", date: "Jun 2025", icon: SiKaggle, color: "#20BEFF" },
  { title: "AutoCAD", issuer: "Udemy", date: "Mar 2024", icon: SiUdemy, color: "#A435F0" },
  { title: "AutoCAD with Revit", issuer: "NAVTTC", date: "Oct 2023", icon: FaBuilding, color: "#4CAF50" },
  { title: "Python Data Analysis", issuer: "Coursera", date: "Sep 2023", icon: SiCoursera, color: "#0056D2" },
  { title: "Introduction to Artificial Intelligence and Machine Learning", issuer: "Google Cloud", date: "May 2024", icon: SiGooglecloud, color: "#4285F4" },
  { title: "Freelancing", issuer: "DigiSkills.pk", date: "Dec 2022", icon: FaLaptopCode, color: "#8BC34A" },
  { title: "SEO (Search Engine Optimization)", issuer: "DigiSkills.pk", date: "Dec 2022", icon: FaLaptopCode, color: "#8BC34A" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud", date: "Jul 2024", icon: SiGooglecloud, color: "#4285F4" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Certifications</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            Continuous learning is a core part of my professional journey. Here are some of the certifications I have earned to stay updated with the latest technologies and industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-muted/30 border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 mt-1">
                <cert.icon size={24} color={cert.color} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-sm text-accent mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
