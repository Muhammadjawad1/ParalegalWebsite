import React from 'react';
import Header from '../../layout/header/Header';
import { Footer } from '../../layout';
import Hero from './Hero';
import LegalSolutions from './LegalSolutions';
import PracticeAreas from './PracticeAreas';
import Testimonials from './Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Header currentPage="home" />
      <Hero />
      <LegalSolutions />
      <PracticeAreas />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
