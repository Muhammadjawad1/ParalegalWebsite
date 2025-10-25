import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-description">
              We are a dedicated team of legal professionals committed to providing exceptional legal services. 
              With years of experience in various practice areas, we have built a reputation for delivering 
              reliable and effective legal solutions to our clients.
            </p>
            <p className="about-us-description">
              Our mission is to ensure that every client receives personalized attention and the highest 
              quality legal representation. We believe in transparency, integrity, and maintaining the 
              highest ethical standards in all our legal practices.
            </p>
            <div className="about-us-features">
              <div className="feature-item">
                <div className="feature-icon">⚖️</div>
                <h3>Expert Legal Services</h3>
                <p>Comprehensive legal solutions across multiple practice areas</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Client-Focused Approach</h3>
                <p>Personalized attention and dedicated support for every client</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <h3>Proven Track Record</h3>
                <p>Years of successful case outcomes and client satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-us-image">
            <div className="placeholder-image">
              <div className="image-content">
                <div className="person-placeholder">👨‍💼</div>
                <div className="office-items">
                  <div className="bookshelf">📚</div>
                  <div className="plant">🪴</div>
                  <div className="laptop">💻</div>
                  <div className="scale">⚖️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="legal-solutions-preview">
          <h3 className="preview-title">Our Legal Solutions</h3>
          <p className="preview-description">
            We provide highly reliable and effective legal solutions across various practice areas. 
            Our experienced team is ready to assist you with your legal needs.
          </p>
          <div className="preview-cards">
            <div className="preview-card">
              <div className="card-icon">🏛️</div>
              <h4>Bankruptcy Law</h4>
              <p>Expert guidance through financial difficulties</p>
            </div>
            <div className="preview-card">
              <div className="card-icon">🛡️</div>
              <h4>Business Law</h4>
              <p>Comprehensive business legal support</p>
            </div>
            <div className="preview-card">
              <div className="card-icon">🤝</div>
              <h4>Civil Rights Law</h4>
              <p>Protecting your fundamental rights</p>
            </div>
          </div>
          <Link to="/" className="learn-more-button">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
