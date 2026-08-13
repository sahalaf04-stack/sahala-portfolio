function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Resume Matcher",
      description:
        "An AI-powered web application that analyzes resumes against job descriptions and provides a matching score with relevant insights.",
      technologies: [
        "Python",
        "AI/ML",
        "NLP",
        "Streamlit",
      ],
      github:
        "https://github.com/sahalaf04-stack",
    },

    {
      number: "02",
      title: "Fake News Detection",
      description:
        "A machine learning project designed to identify whether a given news article is likely to be real or fake using natural language processing techniques.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Streamlit",
      ],
      github:
        "https://github.com/sahalaf04-stack/Fake-News-Detection",
    },

    {
      number: "03",
      title: "AI Spell Checker",
      description:
        "An AI-based web application that detects spelling errors and helps users improve written text through an interactive interface.",
      technologies: [
        "Python",
        "AI",
        "NLP",
        "Streamlit",
      ],
      github:
        "https://github.com/sahalaf04-stack",
    },

    {
      number: "04",
      title: "Hangman Game",
      description:
        "A Python-based interactive Hangman game developed to practice programming fundamentals, conditions, loops, functions, and user interaction.",
      technologies: [
        "Python",
        "Game Development",
        "Logic Building",
      ],
      github:
        "https://github.com/sahalaf04-stack",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <p className="section-subtitle">
          What I've Built
        </p>

        <h2>Featured Projects</h2>

        <p className="projects-intro">
          A selection of projects that demonstrate my experience
          with Artificial Intelligence, Machine Learning, Python,
          and problem solving.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
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

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-view"
              >
                View on GitHub →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;