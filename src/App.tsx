/**
 * Main Application Component
 * 
 * This is the root component of the personal portfolio website.
 * It orchestrates all the major sections and provides the overall layout structure.
 * 
 * @component
 * @returns {JSX.Element} The complete application layout
 */

import React from 'react';
// Import motion from framer-motion for animations (currently unused but available for future enhancements)
import { motion } from 'framer-motion';

// Import all section components that make up the portfolio
import { Hero } from './components/Hero';                    // Hero/landing section with introduction
import { LinkedInSection } from './components/LinkedInSection'; // Professional profile and experience section
import { SubstackSection } from './components/SubstackSection'; // Writing and articles section
import { GitHubSection } from './components/GitHubSection';   // Projects and repositories section
import { Navbar } from './components/Navbar';                // Navigation header component
import { Footer } from './components/Footer';                // Footer with links and info

/**
 * App Component
 * 
 * Renders the complete portfolio website with:
 * - Gradient background that adapts to dark/light mode
 * - Sticky navigation bar
 * - Main content sections (Hero, LinkedIn, Substack, GitHub)
 * - Footer with additional information
 * 
 * Layout Structure:
 * - Full viewport height with gradient background
 * - Fixed navbar at top
 * - Scrollable main content area
 * - Footer at bottom
 */
function App() {
  return (
    // Main container with responsive gradient background
    // Uses TailwindCSS classes for theming and dark mode support
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      
      {/* Navigation Bar - Fixed position with backdrop blur effect */}
      <Navbar />
      
      {/* Main content area - Contains all portfolio sections */}
      {/* Using semantic <main> tag for better accessibility and SEO */}
      <main>
        {/* Hero Section - Landing area with introduction and call-to-action */}
        <Hero />
        
        {/* LinkedIn Section - Professional experience, skills, and achievements */}
        <LinkedInSection />
        
        {/* Substack Section - Articles, blog posts, and newsletter signup */}
        <SubstackSection />
        
        {/* GitHub Section - Projects, repositories, and coding activity */}
        <GitHubSection />
      </main>
      
      {/* Footer - Social links, contact info, and site navigation */}
      <Footer />
    </div>
  );
}

// Export App component as default for use in main.tsx
export default App;
