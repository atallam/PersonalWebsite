# Personal Portfolio Website

A beautiful, modern personal website that extends your LinkedIn, Substack, and GitHub profiles with cutting-edge UI/UX design and interactive elements.

## Features

### Modern UI/UX Design
- **Responsive Design**: Fully responsive layout that works perfectly on all devices
- **Dark Mode Support**: Built-in dark mode with smooth transitions
- **Modern Animations**: Smooth micro-interactions using Framer Motion
- **Gradient Effects**: Beautiful animated gradients and visual effects
- **Glass Morphism**: Modern glass-like effects with backdrop blur

### LinkedIn Integration
- **Professional Profile**: Interactive profile section with skills and experience
- **Work Experience Timeline**: Visual timeline of your career journey
- **Skills Progress Bars**: Animated skill level indicators
- **Professional Stats**: Network size, projects, achievements display
- **Achievement Badges**: Visual representation of accomplishments

### Substack Integration
- **Article Showcase**: Featured articles with rich previews
- **Newsletter Signup**: Integrated newsletter subscription
- **Reading Stats**: Engagement metrics and subscriber count
- **Article Grid**: Organized display of all your writings
- **Tag System**: Categorized content with interactive tags

### GitHub Integration
- **Repository Showcase**: Featured projects with detailed information
- **Contribution Graph**: Visual representation of coding activity
- **Language Stats**: Programming language distribution
- **Project Cards**: Interactive cards for each repository
- **GitHub Stats**: Followers, contributions, and repository metrics

### Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive hover states on all clickable elements
- **Loading Animations**: Staggered content loading animations
- **Scroll Animations**: Elements animate as they come into view
- **Mobile Menu**: Responsive navigation menu for mobile devices

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type-safe development with full TypeScript support
- **Vite**: Fast development server and build tool
- **TailwindCSS**: Utility-first CSS framework for rapid styling

### UI Components
- **Framer Motion**: Production-ready motion library for React
- **Lucide React**: Beautiful & consistent icon toolkit
- **CSS Variables**: Customizable design system with CSS variables

### Development Tools
- **ESLint**: Code quality and consistency checking
- **PostCSS**: CSS transformation and optimization
- **Autoprefixer**: Automatic vendor prefixing

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

1. Build the optimized production version:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
personal-website/
src/
  components/           # React components
    Hero.tsx           # Hero section with animations
    Navbar.tsx         # Navigation component
    LinkedInSection.tsx # LinkedIn profile integration
    SubstackSection.tsx # Substack articles showcase
    GitHubSection.tsx  # GitHub projects display
    Footer.tsx         # Footer component
  lib/
    utils.ts           # Utility functions
  App.tsx              # Main application component
  main.tsx             # Application entry point
  index.css            # Global styles and TailwindCSS
```

## Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Modify skills displayed
   - Customize call-to-action buttons

2. **LinkedIn Section** (`src/components/LinkedInSection.tsx`):
   - Add your work experience
   - Update skills and proficiency levels
   - Modify professional stats

3. **Substack Section** (`src/components/SubstackSection.tsx`):
   - Add your articles and blog posts
   - Update newsletter signup link
   - Modify reading statistics

4. **GitHub Section** (`src/components/GitHubSection.tsx`):
   - Add your repositories
   - Update contribution data
   - Modify GitHub statistics

### Styling
- **Tailwind Configuration**: Modify `tailwind.config.js` for custom colors and animations
- **CSS Variables**: Update `src/index.css` for theme customization
- **Component Styles**: Each component has its own styling with Tailwind classes

### Animations
- **Framer Motion**: All animations use Framer Motion variants
- **Custom Animations**: Add new animations in component files
- **Timing**: Adjust animation delays and durations as needed

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### Static Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to any static hosting service
3. Configure routing for single-page application

## Performance Optimization

- **Lazy Loading**: Images and components load as needed
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code automatically removed
- **Image Optimization**: Use optimized image formats
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/) - The React library
- [TailwindCSS](https://tailwindcss.com/) - The CSS framework
- [Framer Motion](https://www.framer.com/motion/) - The animation library
- [Lucide](https://lucide.dev/) - The icon library
- [Vite](https://vitejs.dev/) - The build tool
