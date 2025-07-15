import React from 'react';
import { personalData, skills } from '../data/data';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <h3>I'm {personalData.name}</h3>
            <p>{personalData.description}</p>
            <p>I specialize in creating beautiful, functional, and user-centered digital experiences.</p>
          </div>
          <div className="about__skills">
            <h3>My Core Skills</h3>
            <div className="skills__container">
              {skills.map((skill, index) => (
                <div className="skill__item" key={index}>
                  <div className="skill__info">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__percentage">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div 
                      className="skill__level" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;