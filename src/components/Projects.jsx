import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Resume Matcher",
      description:
        "An AI-powered web application that analyzes resumes against job descriptions and provides a matching score with useful insights.",
      technologies: [
        "Python",
        "AI",
        "NLP",
        "Streamlit",
      ],
      github:
        "https://github.com/sahalaf04-stack/AI-Resume-Analyzer",
      live: "#",
    },

    {
      number: "02",
      title: "Fake News Detection",
      description:
        "A machine learning based application designed to identify whether a given news article is likely to be real or fake.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
      ],
      github:
        "https://github.com/sahalaf04-stack/Fake-News-Detection",
      live: "#",
    },

    {
      number: "03",
      title: "AI Spell Checker",
      description:
        "A web-based AI spell checking application that identifies spelling mistakes and provides corrected text.",
      technologies: [
        "Python",
        "AI",
        "NLP",
        "Streamlit",
      ],
      github:
        "https://github.com/sahalaf04-stack/AI-Spell-Checker-Web-App",
      live: "#",
    },

    {
      number: "04",
      title: "Hangman Game",
      description:
        "A Python-based interactive Hangman game demonstrating programming fundamentals, loops, conditions, functions, and user interaction.",
      technologies: [
        "Python",
        "Game Development",
      ],
      github:
        "https://github.com/sahalaf04-stack/CodeAlpha_HangmanGame",
      live: "#",
    },
  ];

  return (
    <section className="projects">

      <div className="projects-container">

        <p className="section-subtitle">
          What I've Built
        </p>

        <h2>Featured Projects</h2>

        <p className="projects-intro">
          A collection of projects where I apply
          Artificial Intelligence, Machine Learning,
          Python, and software development concepts
          to solve practical problems.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={project.number}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              whileHover={{
                y: -10,
              }}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <a
                  className="github-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

              <a
                className="project-view"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Project on GitHub →
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;