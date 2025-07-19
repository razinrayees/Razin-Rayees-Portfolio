# Development Guide

This guide covers the development workflow and architecture of the Razin Rayees Portfolio.

## Architecture Overview

The project follows a modern React architecture with TypeScript:

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── layout/         # Layout components (Navigation, Footer)
├── data/               # Static data and content
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and CSS
```

## Key Technologies

- **React 18**: UI library with hooks and functional components
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Icon library

## Development Workflow

### 1. Setting Up Development Environment

```bash
# Clone and install
git clone https://github.com/razinrayees/portfolio.git
cd portfolio
npm install

# Start development server
npm run dev
```

### 2. Code Organization

#### Components
- **UI Components** (`src/components/ui/`): Reusable components like Button, Logo
- **Section Components** (`src/components/sections/`): Page sections like Hero, About
- **Layout Components** (`src/components/layout/`): Navigation, Footer

#### Data Management
- Static data is stored in `src/data/` directory
- Type definitions in `src/types/`
- Configuration constants in `src/lib/constants.ts`

#### Styling
- Tailwind CSS for styling
- Custom CSS in `src/index.css`
- Be Vietnam font for typography

### 3. Adding New Features

#### Adding a New Section
1. Create component in `src/components/sections/`
2. Add to main App component
3. Update navigation if needed
4. Add corresponding data types

#### Adding New Projects
1. Update `src/data/projects.ts`
2. Ensure proper TypeScript types
3. Add project images to appropriate CDN/hosting

#### Modifying Styles
1. Use Tailwind classes when possible
2. Add custom CSS to `src/index.css` if needed
3. Follow existing design patterns

### 4. Performance Considerations

- **Image Optimization**: Use optimized images from CDN
- **Code Splitting**: Components are already organized for potential splitting
- **Bundle Size**: Monitor with `npm run build`

### 5. Testing

```bash
# Type checking
npm run type-check

# Build test
npm run build

# Preview production build
npm run preview
```

### 6. Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (configure in your editor)

## Common Development Tasks

### Updating Content

#### Personal Information
- Update `src/lib/constants.ts` for contact info
- Modify section components for content changes

#### Projects
- Add/edit projects in `src/data/projects.ts`
- Update project images and links

#### Certificates
- Modify `src/data/certificates.ts`
- Update provider logos and links

### Styling Changes

#### Colors
- Update Tailwind config for theme changes
- Modify gradient classes in components

#### Typography
- Font changes in `src/index.css`
- Update font loading in `index.html`

#### Layout
- Responsive breakpoints in Tailwind classes
- Spacing using Tailwind's spacing scale

### Adding Animations

The project includes:
- Hover effects on interactive elements
- Smooth scrolling navigation
- Custom cursor on desktop
- Transition animations

To add new animations:
1. Use Tailwind transition classes
2. Add custom CSS for complex animations
3. Consider performance impact

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lazy loading for images
- Optimized font loading
- Minimal JavaScript bundle
- Efficient CSS with Tailwind's purging

## Debugging

### Development Tools
- React Developer Tools
- TypeScript error checking
- Vite's fast refresh

### Common Issues
- **Build errors**: Check TypeScript types
- **Styling issues**: Verify Tailwind classes
- **Performance**: Use browser dev tools profiling