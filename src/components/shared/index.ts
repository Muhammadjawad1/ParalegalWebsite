// Shared Components
export { default as Button } from './buttons/Button';
export { default as Card } from './cards/Card';
export { default as ImagePlaceholder } from './images/ImagePlaceholder';

// Shared Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ImagePlaceholderProps {
  person?: string;
  items?: string[];
  className?: string;
}
