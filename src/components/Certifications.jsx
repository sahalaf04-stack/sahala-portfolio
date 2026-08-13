function Certifications() {
  const certifications = [
    {
      title: "TCS iON YUVA AI for All",
      issuer: "TCS iON",
      description:
        "Certification focused on understanding Artificial Intelligence, its applications, and the impact of AI in the modern world.",
    },
    {
      title: "Google Gemini Certified Student",
      issuer: "Google",
      description:
        "Certification recognizing learning and practical understanding of Google Gemini and Generative AI concepts.",
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description:
        "Certification covering the fundamentals of Python programming, including variables, data types, operators, control flow, functions, and basic programming concepts.",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Forage",
      description:
        "Completed a practical job simulation focused on data analytics, problem solving, and real-world business scenarios.",
    },
    {
      title: "Machine Learning Using Python",
      issuer: "Simplilearn SkillUp",
      description:
        "Completed training covering fundamental Machine Learning concepts and implementation using Python.",
    },
  ];

  return (
    <section id="certifications" className="certifications">

      <div className="certifications-container">

        <p className="section-subtitle">
          Learning & Achievements
        </p>

        <h2>Certifications</h2>

        <div className="certifications-grid">

          {certifications.map((certificate, index) => (
            <div
              className="certificate-card"
              key={index}
            >

              <div className="certificate-icon">
                ✓
              </div>

              <h3>
                {certificate.title}
              </h3>

              <p>
                {certificate.description}
              </p>

              <span>
                Issued by {certificate.issuer}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;