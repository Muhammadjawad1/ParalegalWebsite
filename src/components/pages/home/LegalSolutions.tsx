import React from 'react';
import './LegalSolutions.css';

const LegalSolutions: React.FC = () => {
  return (
    <section className="legal-solutions">
      <div className="legal-solutions-container">
        <div className="images-section">
          <div className="image-left">
            <div className="placeholder-image">
              <div className="image-content">
                <div className="person-placeholder">👩‍💼</div>
                <div className="desk-items">
                  <div className="scale">⚖️</div>
                  <div className="chess-set">♟️</div>
                  <div className="books">📚</div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <div className="placeholder-image">
              <div className="image-content">
                <div className="person-placeholder">👨‍💼</div>
                <div className="desk-items">
                  <div className="laptop">💻</div>
                  <div className="glasses">👓</div>
                  <div className="scale">⚖️</div>
                  <div className="books">📚</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <h2 className="content-title">
            We Provide Highly Reliable & Effective Legal Solutions
          </h2>
          <p className="content-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!
          </p>
          <button className="appointment-button">
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegalSolutions;
