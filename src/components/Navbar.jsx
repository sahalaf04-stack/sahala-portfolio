import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        Sahala.
      </a>

      {/* Desktop Navigation */}
      <nav className="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certificates</a>
        <a href="#contact">Contact</a>

      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#certifications" onClick={closeMenu}>
          Certificates
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  );
}

export default Navbar;