
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="home">

      {/* Background effects */}
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="home-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Greeting */}
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
<motion.h1
  className="hero-name"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.15,
  }}
>
  <span className="hero-name-highlight">Sahala</span>{" "}
  <span>Fathima P A</span>
</motion.h1>

{/* Role */}
<motion.h2
  className="hero-role"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.3,
  }}
></motion.h2>

          {/* Role */}
          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            AI & Data Science Engineering Student
          </motion.h2>

          {/* Skills */}
          <motion.div
            className="typing-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <span>Interested in </span>

            <span className="typing-highlight">
              Python
            </span>

            <span className="typing-separator">
              {" "}•{" "}
            </span>

            <span className="typing-highlight">
              AI / ML
            </span>

            <span className="typing-separator">
              {" "}•{" "}
            </span>

            <span className="typing-highlight">
              React
            </span>

            <span className="typing-separator">
              {" "}•{" "}
            </span>

            <span className="typing-highlight">
              Node.js
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >
            Passionate about building practical solutions using
            Artificial Intelligence, Machine Learning, Python,
            and modern web technologies. Currently gaining
            industry experience through internships and
            developing projects that solve real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
          >
            <a
              href="#projects"
              className="hero-button primary-button"
            >
              View My Projects
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="hero-button secondary-button"
            >
              Let's Connect
              <span>↗</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >
            <a
              href="https://github.com/sahalaf04-stack"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/sahala-fathima-p-a-216b3b372/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a href="mailto:sahalaf04@gmail.com">
              Email
            </a>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
        >
          <span></span>
          <p>Scroll to explore</p>
        </motion.div>

      </div>

    </section>
  );
}

export default Home;
