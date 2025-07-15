import React from 'react';
import { experience } from '../data/data';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section__title">My Experience</h2>
        <div className="experience__container">
          {experience.map((exp, index) => (
            <div className="experience__card" key={index}>
              <div className="experience__header">
                <h3 className="experience__role">{exp.role}</h3>
                <span className="experience__company">{exp.company}</span>
                <span className="experience__period">{exp.period}</span>
              </div>
              <p className="experience__description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;