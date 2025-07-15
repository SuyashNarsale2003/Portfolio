import React from 'react';
import { services } from '../data/data';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section__title">My Services</h2>
        <div className="services__container">
          {services.map((service, index) => (
            <div className="service__card" key={index}>
              <div className="service__icon">{service.icon}</div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;