/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrailCanvas from './components/CursorTrailCanvas';

export default function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent/30 selection:text-accent">
      <CursorTrailCanvas color="hsla(183, 63%, 40%, 0.5)" />
      <Navbar />
      
      {/* Main Content Area */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
