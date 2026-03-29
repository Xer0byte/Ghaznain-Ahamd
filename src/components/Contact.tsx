import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    setIsSuccess(false);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.CREATE, 'contacts');
      } catch (err: any) {
        setErrorMsg('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">Contact</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl sm:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me using the form below or directly via email or phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">Location</h3>
                <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">Email</h3>
                <a href="mailto:ghaznain1122@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">ghaznain1122@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">Call</h3>
                <a href="tel:+923294733140" className="text-muted-foreground text-sm hover:text-accent transition-colors">+92 329 4733140</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form className="p-8 rounded-2xl bg-background border border-border space-y-6 shadow-sm" onSubmit={handleSubmit}>
              {isSuccess && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600">
                  {errorMsg}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="ml-2 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
