import { motion } from 'motion/react';
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiGithub,
  SiAutodesk,
  SiAutodeskrevit
} from 'react-icons/si';
import { FaRobot, FaBrain, FaDatabase, FaCogs, FaSpider, FaAws, FaCode, FaMicrochip, FaSearch, FaShieldAlt, FaPuzzlePiece, FaLightbulb, FaNetworkWired, FaCalendarAlt, FaPaintBrush, FaMusic, FaGamepad, FaPlane, FaBullhorn } from 'react-icons/fa';

const skills = [
  { name: 'Python', level: 90, icon: SiPython, color: '#3776AB' },
  { name: 'Machine Learning / AI', level: 85, icon: FaRobot, color: '#FF9900' },
  { name: 'Deep Learning', level: 75, icon: FaBrain, color: '#FF4F8B' },
  { name: 'TensorFlow', level: 75, icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', level: 75, icon: SiPytorch, color: '#EE4C2C' },
  { name: 'HuggingFace', level: 75, icon: SiHuggingface, color: '#FFD21E' },
  { name: 'HTML', level: 100, icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', level: 90, icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', level: 100, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', level: 100, icon: SiReact, color: '#61DAFB' },
  { name: 'FastAPI', level: 70, icon: SiFastapi, color: '#009688' },
  { name: 'Flask', level: 70, icon: SiFlask, color: '#FFFFFF' },
  { name: 'Node.js', level: 70, icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', level: 70, icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
  { name: 'SQL', level: 70, icon: FaDatabase, color: '#4479A1' },
  { name: 'Automation', level: 85, icon: FaCogs, color: '#607D8B' },
  { name: 'Web Scraping', level: 85, icon: FaSpider, color: '#7952B3' },
  { name: 'AWS', level: 65, icon: FaAws, color: '#FF9900' },
  { name: 'Docker', level: 65, icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub Actions', level: 65, icon: SiGithubactions, color: '#2088FF' },
  { name: 'Git/GitHub', level: 90, icon: SiGithub, color: '#FFFFFF' },
  { name: 'AutoCAD (2D/3D)', level: 75, icon: SiAutodesk, color: '#0696D7' },
  { name: 'Revit', level: 70, icon: SiAutodeskrevit, color: '#0696D7' },
];

const interests = [
  { name: 'Programming', icon: FaCode, color: '#4CAF50' },
  { name: 'AI/ML', icon: FaMicrochip, color: '#9C27B0' },
  { name: 'Tech Research', icon: FaSearch, color: '#2196F3' },
  { name: 'Security Testing', icon: FaShieldAlt, color: '#F44336' },
  { name: 'Problem Solving', icon: FaPuzzlePiece, color: '#FF9800' },
  { name: 'Design Thinking', icon: FaLightbulb, color: '#FFEB3B' },
  { name: 'Networking', icon: FaNetworkWired, color: '#00BCD4' },
  { name: 'Scheduling', icon: FaCalendarAlt, color: '#795548' },
  { name: 'Arts', icon: FaPaintBrush, color: '#E91E63' },
  { name: 'Music & Singing', icon: FaMusic, color: '#9C27B0' },
  { name: 'Gaming', icon: FaGamepad, color: '#607D8B' },
  { name: 'Traveling', icon: FaPlane, color: '#03A9F4' },
  { name: 'Marketing', icon: FaBullhorn, color: '#FF5722' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <span className="text-xs font-semibold text-foreground sm:text-sm block mb-4">
              Technical Skills
            </span>
            <div className="flex flex-wrap gap-4 text-xl text-accent-foreground">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (index % 10) * 0.05 }}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-muted px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base hover:bg-muted/80 transition-colors"
                >
                  <span className="text-lg sm:text-xl flex items-center justify-center"><skill.icon color={skill.color} /></span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <span className="text-xs font-semibold text-foreground sm:text-sm block mb-4">
              Interests
            </span>
            <div className="flex flex-wrap gap-4 text-xl text-accent-foreground">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (index % 10) * 0.05 }}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-muted px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base hover:bg-muted/80 transition-colors"
                >
                  <span className="text-lg sm:text-xl flex items-center justify-center"><interest.icon color={interest.color} /></span>
                  {interest.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
