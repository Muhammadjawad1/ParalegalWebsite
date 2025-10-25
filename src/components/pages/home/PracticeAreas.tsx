import React from 'react';
import './PracticeAreas.css';

interface PracticeArea {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const PracticeAreas: React.FC = () => {
  const practiceAreas: PracticeArea[] = [
    {
      id: 1,
      icon: '🏛️',
      title: 'Bankruptcy Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Business Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Civil Rights Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    },
    {
      id: 4,
      icon: '⚖️',
      title: 'Criminal Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    },
    {
      id: 5,
      icon: '✈️',
      title: 'Immigration Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    },
    {
      id: 6,
      icon: '🏠',
      title: 'Family Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!'
    }
  ];

  return (
    <section className="practice-areas">
      <div className="practice-areas-container">
        <div className="section-header">
          <h2 className="section-title">Practice Areas</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="practice-areas-grid">
          {practiceAreas.map((area) => (
            <div key={area.id} className="practice-area-card">
              <div className="card-icon">{area.icon}</div>
              <h3 className="card-title">{area.title}</h3>
              <p className="card-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
