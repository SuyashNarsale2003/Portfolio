import React, { useRef, useState } from 'react';
import { personalData } from '../data/data';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_68fussq', // Replace with your EmailJS service ID
      'template_nmdgpap', // Replace with your EmailJS template ID
      form.current,
      'nlER1cCYbuuQ3rfIj' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__container">
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__icon">📧</span>
                <span className="contact__text">{personalData.email}</span>
              </li>
              <li className="contact__item">
                <span className="contact__icon">📱</span>
                <span className="contact__text">{personalData.phone}</span>
              </li>
              <li className="contact__item">
                <span className="contact__icon">🏠</span>
                <span className="contact__text">{personalData.address}</span>
              </li>
            </ul>
            <div className="contact__social">
              <h4>Follow Me</h4>
              <div className="social__links">
                <a href={personalData.socialLinks.github} className="social__link">GitHub</a>
                <a href={personalData.socialLinks.linkedin} className="social__link">LinkedIn</a>
                <a href={personalData.socialLinks.twitter} className="social__link">Twitter</a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="form__group">
              <input 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                className="form__input" 
                required 
              />
            </div>
            <div className="form__group">
              <input 
                type="email" 
                name="from_email" 
                placeholder="Your Email" 
                className="form__input" 
                required 
              />
            </div>
            <div className="form__group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                className="form__input" 
                required 
              />
            </div>
            <div className="form__group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="form__textarea" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="form__status form__status--success">
                Message sent successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="form__status form__status--error">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;