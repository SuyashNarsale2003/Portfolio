import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'experience', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="navbar__list">
        <li className={`navbar__item ${activeSection === 'home' ? 'active' : ''}`}>
          <a href="#home" className="navbar__link">Home</a>
        </li>
        <li className={`navbar__item ${activeSection === 'about' ? 'active' : ''}`}>
          <a href="#about" className="navbar__link">About</a>
        </li>
        <li className={`navbar__item ${activeSection === 'skills' ? 'active' : ''}`}>
          <a href="#skills" className="navbar__link">Skills</a>
        </li>
        <li className={`navbar__item ${activeSection === 'experience' ? 'active' : ''}`}>
          <a href="#experience" className="navbar__link">Experience</a>
        </li>
        <li className={`navbar__item ${activeSection === 'services' ? 'active' : ''}`}>
          <a href="#services" className="navbar__link">Services</a>
        </li>
        <li className={`navbar__item ${activeSection === 'portfolio' ? 'active' : ''}`}>
          <a href="#portfolio" className="navbar__link">Projects</a>
        </li>
        <li className={`navbar__item ${activeSection === 'contact' ? 'active' : ''}`}>
          <a href="#contact" className="navbar__link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;