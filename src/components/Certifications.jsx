function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "AWS Certification",
      issuer: "Intellipaat",
      description:
        "Completed an AWS certification program through Intellipaat.",
      link:
        "https://intellipaat.com/academy/certificate-link/?Yz0xNjU0JnU9MzY5NTE4JmV4dD0x",
    },

    {
      number: "02",
      title: "Introduction to Generative AI using Snowflake",
      issuer: "GeeksforGeeks",
      description:
        "Completed a certification focused on Generative AI concepts and applications using Snowflake.",
      link:
        "https://www.geeksforgeeks.org/certificate/6ee9f372f12bdbc1c58b07457b8cbd40",
    },

    {
      number: "03",
      title: "MongoDB Overview",
      issuer: "MongoDB",
      description:
        "Completed MongoDB Overview and developed an understanding of MongoDB database fundamentals.",
      link:
        "https://www.credly.com/badges/988a0a20-48c8-436f-9007-609b4c00897e/public_url",
    },

    {
      number: "04",
      title: "Claude 101",
      issuer: "Anthropic",
      description:
        "Completed Claude 101 covering the fundamentals and practical applications of Claude and generative AI.",
      link:
        "https://verify.skilljar.com/c/minhqd6e2avd",
    },

    {
      number: "05",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      description:
        "Completed a Deloitte job simulation focused on practical data analytics and real-world problem solving.",
      link:
        "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a688a63898071be9e2cf122_1785481228737_completion_certificate.pdf",
    },

    {
      number: "06",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description:
        "Completed Python Essentials 1 and developed foundational Python programming skills.",
      link:
        "https://www.credly.com/badges/fde57dee-98fc-4fd9-b262-a45e924cf7a2/linked_in_profile",
    },

    {
      number: "07",
      title: "YUVA AI for All",
      issuer: "TCS iON",
      description:
        "Completed the YUVA AI for All program, building foundational knowledge and awareness of Artificial Intelligence.",
      link: "/certificate/yuva-ai-for-all.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications">

      <div className="certifications-container">

        <p className="section-subtitle">
          My Achievements
        </p>

        <h2>Certifications</h2>

        <p className="certifications-intro">
          Professional certifications and learning achievements
          that demonstrate my continuous growth in AI, data
          science, programming, and technology.
        </p>

        <div className="certifications-grid">

          {certifications.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.number}
            >

              <div className="certificate-top">

                <span className="certificate-number">
                  {certificate.number}
                </span>

                <span className="certificate-icon">
                  ✓
                </span>

              </div>

              <h3>
                {certificate.title}
              </h3>

              <h4>
                {certificate.issuer}
              </h4>

              <p>
                {certificate.description}
              </p>

              {certificate.link !== "#" ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                  <span>↗</span>
                </a>
              ) : (
                <span className="certificate-button certificate-disabled">
                  Certificate Added
                </span>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;