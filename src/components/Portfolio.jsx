import React from 'react';
import { projects } from '../data/data';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section__title">My Projects</h2>
        <div className="portfolio__container">
          {projects.map((project, index) => (
            <div className="portfolio__card" key={index}>
              <div className="portfolio__image-container">
                <img src={project.image} alt={project.title} className="portfolio__image" />
                <div className="portfolio__overlay">
                  <a href={project.link} className="portfolio__link">View Project</a>
                </div>
              </div>
              <div className="portfolio__info">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <div className="portfolio__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;