# ParaLegal - Component Architecture

This project follows a modular component architecture for better maintainability and scalability.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/                 # Layout components (Header, Footer)
│   │   ├── header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   └── index.ts
│   │   ├── footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.css
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── pages/                  # Page-specific components
│   │   ├── home/
│   │   │   ├── HomePage.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LegalSolutions.tsx
│   │   │   ├── PracticeAreas.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── index.ts
│   │   ├── about/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   └── index.ts
│   │   ├── contact/
│   │   │   ├── ContactPage.tsx
│   │   │   ├── ContactHero.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── shared/                 # Reusable components
│   │   ├── buttons/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   ├── cards/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.css
│   │   │   └── index.ts
│   │   ├── images/
│   │   │   ├── ImagePlaceholder.tsx
│   │   │   ├── ImagePlaceholder.css
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts                # Main components export
├── hooks/                      # Custom React hooks
│   └── index.ts
├── types/                      # TypeScript type definitions
│   └── index.ts
├── constants/                  # Application constants
│   └── index.ts
├── utils/                      # Utility functions
│   └── index.ts
├── assets/                     # Static assets
│   └── banner .jpeg
├── App.tsx                     # Main App component
├── App.css                     # Global styles
├── index.css                   # Base styles
└── main.tsx                    # Application entry point
```

## 🏗️ Architecture Principles

### 1. **Modular Organization**
- Components are organized by feature and responsibility
- Each module has its own index.ts for clean exports
- Clear separation between layout, pages, and shared components

### 2. **Reusable Components**
- Shared components in `/shared` directory
- Consistent API across similar components
- Props interfaces defined in `/types`

### 3. **Custom Hooks**
- Business logic extracted into custom hooks
- Reusable state management patterns
- Clean separation of concerns

### 4. **Type Safety**
- All interfaces defined in `/types`
- Consistent typing across components
- Better IDE support and error catching

### 5. **Constants Management**
- All static data in `/constants`
- Easy to update content without touching components
- Centralized configuration

## 🚀 Usage Examples

### Importing Components
```typescript
// Import specific components
import { Header, Footer } from './components/layout';
import { Button, Card } from './components/shared';

// Import page components
import { HomePage, AboutPage } from './components/pages';

// Import everything
import { Header, Footer, Button, Card } from './components';
```

### Using Custom Hooks
```typescript
import { useMobileMenu, useForm } from './hooks';

const MyComponent = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: ''
  });
  
  // Component logic...
};
```

### Using Constants
```typescript
import { PRACTICE_AREAS, TESTIMONIALS } from './constants';

const PracticeAreas = () => {
  return (
    <div>
      {PRACTICE_AREAS.map(area => (
        <Card key={area.id}>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </Card>
      ))}
    </div>
  );
};
```

## 🔧 Benefits

1. **Maintainability**: Clear structure makes it easy to find and update components
2. **Reusability**: Shared components reduce code duplication
3. **Scalability**: Easy to add new features without affecting existing code
4. **Type Safety**: TypeScript interfaces prevent runtime errors
5. **Developer Experience**: Clean imports and consistent patterns
6. **Testing**: Modular structure makes unit testing easier

## 📝 Adding New Components

1. **Layout Components**: Add to `/components/layout/[component-name]/`
2. **Page Components**: Add to `/components/pages/[page-name]/`
3. **Shared Components**: Add to `/components/shared/[component-type]/`
4. **Update Index Files**: Export new components in relevant index.ts files
5. **Add Types**: Define interfaces in `/types/index.ts` if needed

This architecture ensures the codebase remains clean, maintainable, and scalable as the project grows.
