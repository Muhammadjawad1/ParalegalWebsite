import React from 'react';
import './ImagePlaceholder.css';

interface ImagePlaceholderProps {
  person?: string;
  items?: string[];
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  person = '👨‍💼',
  items = ['📚', '⚖️'],
  className = ''
}) => {
  return (
    <div className={`image-placeholder ${className}`}>
      <div className="image-content">
        <div className="person-placeholder">{person}</div>
        <div className="items-container">
          {items.map((item, index) => (
            <div key={index} className="item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
