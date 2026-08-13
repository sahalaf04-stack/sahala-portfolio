import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./App.css";

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="app">

      {/* Animated background */}
      <div className="animated-background">

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="glow glow-three"></div>

        <div className="grid-background"></div>

      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>

        <section id="home">
          <Home />
        </section>

        <AnimatedSection>
          <section id="about">
            <About />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="skills">
            <Skills />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects">
            <Projects />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="experience">
            <Experience />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="education">
            <Education />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="certifications">
            <Certifications />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact">
            <Contact />
          </section>
        </AnimatedSection>

      </main>

      {/* Footer */}
      <footer className="footer">

        <p>
          © {new Date().getFullYear()} Sahala Fathima P A.
          All rights reserved.
        </p>

        <p>
          Built with React ⚛️
        </p>

      </footer>

    </div>
  );
}

export default App;