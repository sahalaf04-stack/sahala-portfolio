import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Claude 101",
      issuer: "Anthropic",
      description:
        "Completed Claude 101, covering the fundamentals and practical use of Claude and generative AI.",
      credentialId: "6a6c47638f517ce457d9dfa5",
      link: "https://verify.skilljar.com/c/minhqd6e2avd",
    },

    {
      title: "TCS iON YUVA AI for All",
      issuer: "TCS iON",
      description:
        "Completed the TCS iON YUVA AI for All program, gaining foundational knowledge of Artificial Intelligence and its practical applications.",
      credentialId: "Sahala_A_40027",
      link: "#",
    },

    {
      title: "Google Gemini Certified Student",
      issuer: "Google",
      description:
        "Completed certification focused on understanding and using Google Gemini and generative AI tools.",
      link: "#",
    },

    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description:
        "Completed Python Essentials 1, covering Python programming fundamentals, data types, control flow, functions, and core programming concepts.",
      link: "#",
    },

    {
      title: "Deloitte Job Simulation",
      issuer: "Deloitte",
      description:
        "Completed a Deloitte job simulation involving practical professional and technology-related tasks.",
      credentialId: "03802433-6101-73161-0",
      link: "#",
    },

    {
      title: "Machine Learning Using Python",
      issuer: "Simplilearn",
      description:
        "Completed training in Machine Learning using Python, covering fundamental machine learning concepts and implementation.",
      link: "#",
    },
  ];

  return (
    <section className="certifications" id="certifications">

      <div className="certifications-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-subtitle">
            Continuous Learning
          </p>

          <h2>Certifications</h2>
        </motion.div>

        <div className="certifications-grid">

          {certifications.map((certificate, index) => (

            <motion.div
              className="certificate-card"
              key={certificate.title}

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
                y: -10,
                scale: 1.02,
              }}
            >

              <div className="certificate-icon">
                🏆
              </div>

              <h3>
                {certificate.title}
              </h3>

              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              <p className="certificate-description">
                {certificate.description}
              </p>

              {certificate.credentialId && (
                <p className="credential-id">
                  Credential ID:{" "}
                  {certificate.credentialId}
                </p>
              )}

              {certificate.link !== "#" ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate →
                </a>
              ) : (
                <span className="certificate-pending">
                  Certificate
                </span>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;