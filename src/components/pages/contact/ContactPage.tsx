import React from 'react';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Header from '../../layout/header/Header';

import Footer from '../../layout/footer/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="App">
      <Header currentPage="contact" />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
