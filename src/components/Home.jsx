import { useEffect, useState } from "react";

function Home() {
  const roles = [
    "Python Developer",
    "AI/ML Enthusiast",
    "Data Science Student",
    "Full-Stack Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );

        if (displayText.length === currentRole.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Sahala Fathima P A
        </h1>

        <h2>
          AI & Data Science Student
        </h2>

        <p className="description">
          <span>{displayText}</span>
          <span className="typing-cursor">|</span>
        </p>

        <p className="hero-text">
          I build practical solutions using Artificial Intelligence,
          Machine Learning, Python, Data Analytics, and Full-Stack
          technologies. I'm passionate about learning, creating,
          and solving real-world problems through technology.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            View Projects
          </a>

          <a href="#contact">
            Contact Me
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/sahalaf04-stack"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sahala-fathima-p-a-216b3b372/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:sahalaf04@gmail.com">
            Email ↗
          </a>

        </div>

      </div>
    </section>
  );
}

export default Home;