import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true
}) => {
  const baseClasses = 'card';
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
