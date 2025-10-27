// Global Types
export interface HeaderProps {
  currentPage?: 'home' | 'about' | 'contact';
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
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

export interface PracticeArea {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  message?: string;
}
