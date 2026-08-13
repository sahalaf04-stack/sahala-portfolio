function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        "Python",
        "C",
        "JavaScript",
        "SQL",
      ],
    },

    {
      title: "AI & Data Science",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Natural Language Processing",
        "Data Analytics",
        "Generative AI",
      ],
    },

    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },

    {
      title: "Databases & Tools",
      skills: [
        "MongoDB",
        "Git",
        "GitHub",
        "VS Code",
        "Streamlit",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <p className="section-subtitle">
          What I Work With
        </p>

        <h2>Technical Skills</h2>

        <p className="skills-intro">
          Technologies and tools I use while building projects,
          learning new concepts, and developing practical solutions.
        </p>

        <div className="skills-categories">

          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={index}
            >

              <div className="skill-category-header">
                <span className="skill-number">
                  0{index + 1}
                </span>

                <h3>
                  {category.title}
                </h3>
              </div>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;