import React from 'react';
import './LegalSolutions.css';

const LegalSolutions: React.FC = () => {
  const scrollToAppointment = () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
         <div>
         <h2 className="content-title">
            We Provide Highly Reliable & Effective Legal Solutions
          </h2>
         </div>
        <div>  <p className="content-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!
          </p></div>
          <div><button className="appointment-button" onClick={scrollToAppointment}>
            Book an appointment
          </button></div>
        </div>
      </div>
    </section>
  );
};

export default LegalSolutions;
