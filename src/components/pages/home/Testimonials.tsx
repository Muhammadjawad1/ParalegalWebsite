import React from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Lina Gold',
      position: 'Owner',
      company: 'Ford',
      avatar: '👩',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'
    },
    {
      id: 2,
      name: 'Mike Fisher',
      position: 'Owner',
      company: 'Ford',
      avatar: '👨‍💼',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'
    },
    {
      id: 3,
      name: 'Sheen Yu',
      position: 'Owner',
      company: 'Ford',
      avatar: '👩‍💼',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-section">
          <h2 className="testimonials-title">Happy Customers</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-position">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <div className="content-section">
          <div className="legal-solutions-content">
            <div className="content-image">
              <div className="placeholder-image">
                <div className="person-placeholder">👨‍💼</div>
                <div className="office-items">
                  <div className="bookshelf">📚</div>
                  <div className="plant">🪴</div>
                  <div className="laptop">💻</div>
                </div>
              </div>
            </div>
            <div className="content-text">
              <h3 className="content-title">We Have Legal Solutions</h3>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?
              </p>
              <p className="content-paragraph">
                Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae
              </p>
            </div>
          </div>
          
          <div className="download-info">
            <h3 className="download-title">How to download and register?</h3>
            <p className="download-description">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
