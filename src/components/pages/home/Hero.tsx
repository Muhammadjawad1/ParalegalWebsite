import React, { useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Notary Public & Legal Solutions</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
            </p>
          </div>
          <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Book an Appointment</h2>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  placeholder="Select Date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                <span className="calendar-icon">📅</span>
              </div>
              <button type="submit" className="book-button">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
