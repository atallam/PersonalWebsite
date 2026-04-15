/**
 * Footer Component
 * 
 * Site footer with social links, navigation, and contact information.
 * Features a responsive layout with smooth animations and a
 * scroll-to-top button for improved user experience.
 * 
 * @component
 * @returns {JSX.Element} Footer with links and scroll functionality
 */

import React from 'react';
// Import motion for animations and scroll effects
import { motion } from 'framer-motion';
// Import icons for social links and UI elements
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * 
 * Features:
 * - Responsive grid layout
 * - Social media links with hover effects
 * - Quick navigation links
 * - Contact information
 * - Copyright notice
 * - Scroll-to-top button
 * - Smooth animations
 */
export const Footer = () => {
  // Get current year for dynamic copyright notice
  const currentYear = new Date().getFullYear();
  
  // Social media links displayed in footer
  // Update hrefs with actual profile URLs
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },     // Code repositories
    { icon: Linkedin, href: '#', label: 'LinkedIn' }, // Professional networking
    { icon: Mail, href: '#', label: 'Email' },       // Contact email
  ];

  // Quick navigation links for easy site access
  // Corresponds to main sections of the portfolio
  const quickLinks = [
    { name: 'Home', href: '#home' },        // Hero section
    { name: 'LinkedIn', href: '#linkedin' }, // Professional profile
    { name: 'Substack', href: '#substack' }, // Articles and writing
    { name: 'GitHub', href: '#github' },    // Projects and repositories
  ];

  /**
   * Scroll to Top Function
   * 
   * Smoothly scrolls the user back to the top of the page.
   * Uses the native scroll behavior with smooth animation.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Main footer container with dark background and responsive padding
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout for footer sections - responsive 1 to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand/About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}      // Start invisible and below
            whileInView={{ opacity: 1, y: 0 }}   // Fade in and slide up when visible
            viewport={{ once: true }}            // Only animate once
          >
            {/* Portfolio title with gradient effect */}
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            
            {/* Brief description of portfolio/brand */}
            <p className="text-slate-400 mb-4">
              Building beautiful, functional, and user-centric web experiences with modern technologies.
            </p>
            
            {/* Social media links with hover animations */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;           // Extract icon component
                return (
                  <motion.a
                    key={link.label}              // Unique key for React
                    href={link.href}              // Link to social profile
                    whileHover={{ scale: 1.2, rotate: 5 }}  // Scale and rotate on hover
                    whileTap={{ scale: 0.9 }}     // Scale down on click
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={link.label}       // Accessibility label
                  >
                    <Icon size={20} />            // Render icon with fixed size
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}      // Start invisible and below
            whileInView={{ opacity: 1, y: 0 }}   // Fade in and slide up when visible
            viewport={{ once: true }}            // Only animate once
            transition={{ delay: 0.1 }}          // Delayed animation for stagger effect
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* Map through quick navigation links */}
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}              // Smooth scroll to section
                    whileHover={{ x: 5 }}          // Slide right on hover
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}                 // Link text
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}      // Start invisible and below
            whileInView={{ opacity: 1, y: 0 }}   // Fade in and slide up when visible
            viewport={{ once: true }}            // Only animate once
            transition={{ delay: 0.2 }}          // Further delayed animation
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            
            {/* Contact description */}
            <p className="text-slate-400 mb-4">
              Feel free to reach out for collaborations, projects, or just to say hello!
            </p>
            
            {/* Contact button with gradient background */}
            <motion.button
              whileHover={{ scale: 1.05 }}       // Scale up on hover
              whileTap={{ scale: 0.95 }}         // Scale down on click
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Contact Me                       // Button text
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright and attribution */}
        <motion.div
          initial={{ opacity: 0 }}            // Start invisible
          whileInView={{ opacity: 1 }}       // Fade in when visible
          viewport={{ once: true }}          // Only animate once
          transition={{ delay: 0.3 }}        // Delayed animation
          className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          {/* Copyright notice with dynamic year */}
          <div className="text-slate-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </div>
          
          {/* Attribution with heart icon */}
          <div className="flex items-center text-slate-400 text-sm">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TailwindCSS
          </div>
        </motion.div>

        {/* Scroll to Top Button - Fixed position floating button */}
        <motion.button
          onClick={scrollToTop}                // Scroll to top on click
          whileHover={{ scale: 1.1 }}         // Scale up on hover
          whileTap={{ scale: 0.9 }}           // Scale down on click
          initial={{ opacity: 0, y: 20 }}     // Start invisible and below
          whileInView={{ opacity: 1, y: 0 }}  // Fade in and slide up when visible
          viewport={{ once: true }}          // Only animate once
          transition={{ delay: 0.4 }}        // Further delayed animation
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Scroll to top"         // Accessibility label
        >
          <ArrowUp size={20} />              // Up arrow icon
        </motion.button>
      </div>
    </footer>
  );
};
