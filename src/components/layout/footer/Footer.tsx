import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const quickLinks = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'];
  const resources = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'];
  const support = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'];
  const company = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">About Us</h3>
              <p className="footer-description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="social-media">
                <div className="social-icon facebook">f</div>
                <div className="social-icon instagram">📷</div>
                <div className="social-icon twitter">🐦</div>
                <div className="social-icon linkedin">in</div>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                {resources.map((link, index) => (
                  <li key={index}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                {support.map((link, index) => (
                  <li key={index}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                {company.map((link, index) => (
                  <li key={index}><a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            Copyright ©2025 All rights reserved | with <span className="heart">❤️</span> by Jawad the Artist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
