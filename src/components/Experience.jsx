function Experience() {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Inamigos Solutions",
      period: "Internship",
      description:
        "Working on full-stack web development using the MERN stack and gaining practical experience in building modern web applications, REST APIs, database integration, and frontend development.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "REST APIs",
      ],
    },

    {
      title: "AI Intern",
      company: "Inamigos Solutions",
      period: "Internship",
      description:
        "Developing practical knowledge in Artificial Intelligence and Machine Learning while exploring AI-based solutions, Python programming, and real-world problem solving.",
      skills: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
      ],
    },

    {
      title: "Campus Ambassador",
      company: "AllCollegeEvents",
      period: "Campus Ambassador",
      description:
        "Representing AllCollegeEvents as a campus ambassador by promoting technical events, hackathons, learning opportunities, and student-focused programs within the college community.",
      skills: [
        "Community Building",
        "Event Promotion",
        "Communication",
        "Leadership",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">

      <div className="experience-container">

        <p className="section-subtitle">
          My Professional Journey
        </p>

        <h2>Experience</h2>

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <div
              className="experience-card"
              key={index}
            >

              <div className="experience-header">

                <div>

                  <h3>
                    {experience.title}
                  </h3>

                  <h4>
                    {experience.company}
                  </h4>

                </div>

                <span>
                  {experience.period}
                </span>

              </div>

              <p>
                {experience.description}
              </p>

              <div className="experience-tech">

                {experience.skills.map((skill) => (
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

export default Experience;