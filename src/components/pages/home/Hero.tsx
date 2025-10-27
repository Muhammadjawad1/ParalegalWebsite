import React, { useState } from 'react';
import { sendBookingEmail } from '../../../services/emailService';
import type { BookingFormData } from '../../../services/emailService';
import './Hero.css';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendBookingEmail(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', date: '' });
        // Show success message
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Appointment request sent successfully! We'll contact you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Failed to send appointment request. Please try again or contact us directly.
                </div>
              )}

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
              <button 
                type="submit" 
                className="book-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book Appointment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
