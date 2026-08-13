import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      icon: "💻",
      skills: [
        "Python",
        "C",
        "JavaScript",
        "SQL",
      ],
    },

    {
      title: "AI & Data Science",
      icon: "🧠",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Natural Language Processing",
        "Data Science",
      ],
    },

    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },

    {
      title: "Tools & Technologies",
      icon: "⚙️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Streamlit",
        "REST APIs",
      ],
    },

    {
      title: "Core Concepts",
      icon: "🚀",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "DBMS",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-subtitle">
            My Technical Toolkit
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p className="skills-intro">
            Technologies and concepts I'm learning and using
            to build practical software and AI solutions.
          </p>
        </motion.div>


        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-card"
              key={group.title}

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
                delay: index * 0.1,
              }}

              whileHover={{
                y: -8,
              }}
            >

              <div className="skill-card-top">

                <span className="skill-icon">
                  {group.icon}
                </span>

                <span className="skill-count">
                  {group.skills.length}
                </span>

              </div>

              <h3>
                {group.title}
              </h3>

              <div className="skill-tags">

                {group.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;