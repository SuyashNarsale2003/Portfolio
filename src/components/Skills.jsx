import React from 'react';
import { skillsCategories } from '../data/data';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section__title">My Skills</h2>
        <div className="skills__container">
          {skillsCategories.map((category, index) => (
            <div className="skills__category" key={index}>
              <h3 className="skills__category-title">{category.title}</h3>
              
              {category.subcategories ? (
                <div className="skills__subcategories">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className="skills__subcategory" key={subIndex}>
                      <h4 className="skills__subcategory-title">{subcategory.title}</h4>
                      <ul className="skills__list">
                        {subcategory.skills.map((skill, skillIndex) => (
                          <li className="skills__item" key={skillIndex}>
                            <span className="skills__bullet">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="skills__list">
                  {category.skills.map((skill, skillIndex) => (
                    <li className="skills__item" key={skillIndex}>
                      <span className="skills__bullet">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;