import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      number: "01",
      title: "AI & Data Science",
      text: "Building practical solutions using Artificial Intelligence, Machine Learning and Python.",
    },
    {
      number: "02",
      title: "Full Stack Development",
      text: "Developing modern web applications using React, Node.js, Express and MongoDB.",
    },
    {
      number: "03",
      title: "Problem Solving",
      text: "Strengthening my Data Structures and Algorithms skills through continuous practice.",
    },
    {
      number: "04",
      title: "Continuous Learning",
      text: "Constantly exploring new technologies, tools and industry practices.",
    },
  ];

  return (
    <section className="about" id="about">

      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-subtitle">
            Get To Know Me
          </p>

          <h2>
            About <span>Me</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p>
              I'm <strong>Sahala Fathima P A</strong>, an
              Artificial Intelligence and Data Science student
              passionate about technology and software development.
            </p>

            <p>
              I enjoy transforming ideas into practical applications
              using Python, Artificial Intelligence, Machine Learning
              and modern web technologies.
            </p>

            <p>
              I'm currently expanding my skills in full-stack
              development, AI/ML and Data Structures & Algorithms
              while building projects that demonstrate real-world
              problem-solving.
            </p>

            <p>
              My goal is to build impactful technology solutions
              and grow as a software developer in the AI and
              full-stack development space.
            </p>

          </motion.div>


          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {highlights.map((item, index) => (

              <motion.div
                className="about-highlight"
                key={item.number}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                whileHover={{
                  x: 8,
                }}
              >

                <span className="highlight-number">
                  {item.number}
                </span>

                <div>
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;