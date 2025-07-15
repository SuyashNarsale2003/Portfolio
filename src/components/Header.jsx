import React from 'react';
import { personalData } from '../data/data';
import profilePhoto from '../assets/profile.jpg';
import '../styles/Header.css';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" id="home">
      <div className="header__content">
        <div className="header__photo-container">
          <img 
            src={profilePhoto} 
            alt={personalData.name} 
            className="header__photo"
          />
        </div>
        <div className="header__3d-card">
          <h1 className="header__title">{personalData.name}</h1>
          <h2 className="header__subtitle">{personalData.title}</h2>
          <p className="header__description">{personalData.description}</p>
          <button 
            className="header__cta" 
            onClick={scrollToContact}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;