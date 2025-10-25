import { PracticeArea, Testimonial } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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

export const CONTACT_INFO = {
  address: '34 Street Name, City Name Here, United States',
  phone: '+1 242 4942 290',
  email: 'info@yourdomain.com'
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'f', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'LinkedIn', icon: 'in', url: '#' }
];

export const FOOTER_LINKS = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us'
];
