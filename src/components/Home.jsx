import { motion } from "framer-motion";

function Home() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* TEXT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            Hello, I'm
          </p>

          {/* NAME + PHOTO */}
          <div className="name-photo-row">

            <div className="name-wrapper">

              <h1>
                Sahala
                <span> Fathima P A</span>
              </h1>

              <h2>
                AI & Data Science Student
              </h2>

            </div>

            {/* SMALL PROFILE PHOTO */}
            <motion.div
              className="small-profile-wrapper"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
            >

              <div className="small-photo-ring"></div>

              <img
                src="/images/sahala.jpg"
                alt="Sahala Fathima P A"
                className="small-profile-photo"
              />

            </motion.div>

          </div>


          <div className="typing-text">
            Python Developer
            <span> | </span>
            AI/ML Enthusiast
            <span> | </span>
            MERN Stack Developer
          </div>


          <p className="hero-description">
            Passionate AI & Data Science student with experience
            in Python, Machine Learning, Artificial Intelligence,
            and MERN Stack development. I enjoy building practical
            applications and continuously learning new technologies.
          </p>


          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects">
              View Projects
            </a>

            <a href="#contact">
              Contact Me
            </a>

          </div>


          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <a
              href="https://github.com/sahalaf04-stack"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sahala-fathima-p-a-216b3b372"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:sahalaf04@gmail.com">
              Email
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Home;