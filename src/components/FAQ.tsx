import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Xer0byte?",
    answer: "Xer0byte is a technology solutions brand founded by Ghaznain Ahmad. It specializes in practical artificial intelligence solutions, Python automation, modern full-stack web applications, and precision AI data annotation."
  },
  {
    question: "Who is Ghaznain Ahmad?",
    answer: "Ghaznain Ahmad is the Founder and Lead Developer of Xer0byte. He is an AI/ML engineer and software developer based in Lahore, Pakistan, with hands-on experience in machine learning pipelines, modern React web development, and research-grade data annotation leadership."
  },
  {
    question: "What core services does Xer0byte provide?",
    answer: "Xer0byte delivers custom AI and machine learning solutions, full-stack web development (React, Node.js, Python), automated workflow scripts, research-grade dataset annotation using Shelfr, and AutoCAD 2D/3D technical drafting."
  },
  {
    question: "Which programming languages and technologies do you use?",
    answer: "Primary technical competencies include Python (LangChain, Scikit-Learn, Pandas), JavaScript/TypeScript (React, Vite, Node.js, Express), databases (PostgreSQL, MySQL, Firestore), AutoCAD, Revit, and Linux environments."
  },
  {
    question: "How can I collaborate or hire Xer0byte for a project?",
    answer: "You can initiate a project inquiry directly via the contact form on this site, email Ghaznain Ahmad at ghaznain1122@gmail.com, or reach out by phone at +92 329 4733140. Responses are typically provided within 24 hours."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <HelpCircle size={14} />
            Direct Answers &amp; Overview
          </div>
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto sm:text-lg">
            Essential facts about Xer0byte, our engineering expertise, services, and how we deliver value through AI and web development.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm overflow-hidden transition-colors hover:border-accent/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
