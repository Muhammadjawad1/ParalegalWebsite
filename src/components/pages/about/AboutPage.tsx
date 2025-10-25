import React from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import AboutUs from './AboutUs';

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header currentPage="about" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
