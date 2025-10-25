# ParaLegal - Legal Services Website

A modern, responsive React TypeScript website for legal services, built with Vite.

## Features

- **Header**: Fixed navigation with logo and menu items
- **Hero Section**: Eye-catching background with booking form
- **Legal Solutions**: Two-column layout with placeholder images and content
- **Practice Areas**: Grid of service cards with icons
- **Testimonials**: Customer reviews and additional content sections
- **Footer**: Multi-column footer with social media links

## Technologies Used

- React 18 with TypeScript
- Vite for fast development and building
- CSS3 with modern features (Grid, Flexbox, CSS Variables)
- Responsive design for all screen sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── Hero.tsx & Hero.css
│   ├── LegalSolutions.tsx & LegalSolutions.css
│   ├── PracticeAreas.tsx & PracticeAreas.css
│   ├── Testimonials.tsx & Testimonials.css
│   └── Footer.tsx & Footer.css
├── App.tsx & App.css
├── index.css
└── main.tsx
```

## Design Features

- Clean, professional design matching legal industry standards
- Smooth animations and hover effects
- Accessible color contrast and focus states
- Mobile-first responsive design
- Modern CSS Grid and Flexbox layouts

## Customization

The website uses CSS custom properties and modular components, making it easy to customize:

- Colors can be changed in the CSS files
- Content can be updated in the component files
- Layout can be modified by adjusting CSS Grid properties
- Images can be replaced with actual photos

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.