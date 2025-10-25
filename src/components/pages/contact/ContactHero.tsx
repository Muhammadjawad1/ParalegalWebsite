import React from 'react';
import './ContactHero.css';

const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-background">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
