/**
 * Navigation Bar Component
 * 
 * Provides site navigation with responsive design, smooth animations,
 * and social media links. Features a desktop navigation bar and mobile
 * hamburger menu with backdrop blur effects.
 * 
 * @component
 * @returns {JSX.Element} Fixed navigation bar with responsive menu
 */

import React from 'react';
// Import motion for animations (slide-in, fade effects)
import { motion } from 'framer-motion';
// Import icons for navigation and social links
import { Github, Linkedin, BookOpen, Menu, X } from 'lucide-react';
// Import useState for managing mobile menu state
import { useState } from 'react';

/**
 * Navbar Component
 * 
 * Features:
 * - Fixed position with backdrop blur effect
 * - Responsive design (desktop horizontal, mobile hamburger)
 * - Smooth scroll navigation to sections
 * - Social media integration links
 * - Dark mode support
 * - Animated transitions and hover effects
 */
export const Navbar = () => {
  // State management for mobile menu toggle
  // Controls visibility of mobile navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items with section links
  // These correspond to the main sections of the portfolio
  const navItems = [
    { name: 'Home', href: '#home' },        // Hero section
    { name: 'LinkedIn', href: '#linkedin' }, // Professional profile section
    { name: 'Substack', href: '#substack' }, // Articles and writing section
    { name: 'GitHub', href: '#github' },    // Projects and repositories section
  ];

  // Social media links displayed in navigation
  // Links to external profiles (update hrefs with actual URLs)
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' }, // Professional networking
    { icon: Github, href: '#', label: 'GitHub' },      // Code repositories
    { icon: BookOpen, href: '#', label: 'Substack' }, // Writing platform
  ];

  return (
    // Main navigation container with slide-in animation
    // Fixed positioning with backdrop blur for modern glass effect
    <motion.nav
      initial={{ y: -100 }}        // Start above viewport
      animate={{ y: 0 }}           // Slide down to position
      className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 z-50"
    >
      {/* Container for responsive padding and max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for logo, nav items, and social links */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand section with fade-in animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}  // Start invisible and left
            animate={{ opacity: 1, x: 0 }}     // Fade in and slide right
            className="flex-shrink-0"
          >
            {/* Portfolio title with gradient effect */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Map through navigation items and create animated links */}
              {navItems.map((item) => (
                <motion.a
                  key={item.name}                    // Unique key for React rendering
                  href={item.href}                  // Smooth scroll to section
                  whileHover={{ scale: 1.05 }}       // Scale up on hover
                  whileTap={{ scale: 0.95 }}         // Scale down on click
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links - Desktop only with hover animations */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Map through social media links and create animated icons */}
            {socialLinks.map((link) => {
              const Icon = link.icon;           // Extract icon component
              return (
                <motion.a
                  key={link.label}              // Unique key for React
                  href={link.href}              // Link to social profile
                  whileHover={{ scale: 1.1, rotate: 5 }}  // Scale and rotate on hover
                  whileTap={{ scale: 0.9 }}     // Scale down on click
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}       // Accessibility label
                >
                  <Icon size={20} />            // Render icon with fixed size
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle mobile menu state
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle navigation menu"         // Accessibility label
            >
              {/* Conditionally render menu icon or close icon */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible when menu is open */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}  // Start invisible and above
            animate={{ opacity: 1, y: 0 }}     // Fade in and slide down
            exit={{ opacity: 0, y: -20 }}     // Exit animation (if using AnimatePresence)
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
          >
            {/* Navigation links for mobile */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Map through navigation items for mobile menu */}
              {navItems.map((item) => (
                <a
                  key={item.name}                    // Unique key for React
                  href={item.href}                  // Smooth scroll to section
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Social links for mobile - centered layout */}
            <div className="flex justify-center space-x-4 pb-3">
              {/* Map through social media links for mobile menu */}
              {socialLinks.map((link) => {
                const Icon = link.icon;           // Extract icon component
                return (
                  <a
                    key={link.label}              // Unique key for React
                    href={link.href}              // Link to social profile
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                    aria-label={link.label}       // Accessibility label
                  >
                    <Icon size={20} />            // Render icon with fixed size
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
