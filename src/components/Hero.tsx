/**
 * Hero Section Component
 * 
 * The landing section of the portfolio website featuring:
 * - Animated gradient background with floating elements
 * - Personal introduction and call-to-action buttons
 * - Skills showcase
 * - Smooth scroll indicator
 * 
 * @component
 * @returns {JSX.Element} Hero section with animations and interactive elements
 */

import React from 'react';
// Import motion for complex animations and stagger effects
import { motion } from 'framer-motion';
// Import icons for buttons and UI elements
import { ArrowDown, Download, Mail } from 'lucide-react';

/**
 * Hero Component
 * 
 * Features:
 * - Full viewport height section
 * - Animated gradient background
 * - Floating decorative elements
 * - Staggered text animations
 * - Interactive call-to-action buttons
 * - Skills badges
 * - Scroll indicator
 */
export const Hero = () => {
  // Animation variants for the main container
  // Controls the overall fade-in and stagger timing of child elements
  const containerVariants = {
    hidden: { opacity: 0 },              // Start completely invisible
    visible: {
      opacity: 1,                        // Fade in to full opacity
      transition: {
        staggerChildren: 0.1,             // Stagger child animations by 0.1s
        delayChildren: 0.2,               // Wait 0.2s before starting animations
      },
    },
  };

  // Animation variants for individual items
  // Creates smooth slide-up effect with spring physics
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },       // Start below position and invisible
    visible: {
      y: 0,                             // Slide up to final position
      opacity: 1,                       // Fade in to full opacity
      transition: {
        type: 'spring',                 // Use spring physics for natural movement
        stiffness: 100,                  // Spring stiffness (higher = faster)
      },
    },
  };

  return (
    // Main hero section container with full viewport height
    // Uses flexbox for centering content and relative positioning for child elements
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient overlay */}
      {/* Creates dynamic color transitions using custom Tailwind animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-30 animate-gradient-xy" />
      
      {/* Floating decorative elements */}
      {/* Creates depth and visual interest with animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Generate 6 floating elements with random positions and animations */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}                           // Unique key for React rendering
            className="absolute w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,   // Random horizontal position
              top: `${Math.random() * 100}%`,    // Random vertical position
            }}
            animate={{
              y: [0, -30, 0],                   // Vertical floating motion
              x: [0, 20, 0],                    // Horizontal floating motion
              scale: [1, 1.1, 1],               // Scale pulsing effect
            }}
            transition={{
              duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
              repeat: Infinity,                 // Loop animation forever
              repeatType: 'reverse',            // Reverse animation on each repeat
              delay: Math.random() * 2,         // Random start delay
            }}
          />
        ))}
      </div>

      {/* Main content container with staggered animations */}
      <motion.div
        variants={containerVariants}         // Apply container animation variants
        initial="hidden"                    // Start in hidden state
        animate="visible"                   // Animate to visible state
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        {/* Main heading with staggered animation */}
        <motion.h1
          variants={itemVariants}            // Apply item animation variants
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6"
        >
          {/* First line - Simple greeting */}
          <span className="block">Hi, I'm</span>
          
          {/* Second line - Name with gradient effect */}
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Name
          </span>
        </motion.h1>

        {/* Subtitle with professional description */}
        <motion.p
          variants={itemVariants}            // Apply staggered animation
          className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          Full-Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </motion.p>

        {/* Call-to-action buttons container */}
        <motion.div
          variants={itemVariants}            // Apply staggered animation
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary contact button with gradient background */}
          <motion.button
            whileHover={{ scale: 1.05 }}       // Scale up on hover
            whileTap={{ scale: 0.95 }}         // Scale down on click
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
          >
            <Mail size={20} />                // Mail icon
            Get In Touch                       // Button text
          </motion.button>

          {/* Secondary CV download button */}
          <motion.button
            whileHover={{ scale: 1.05 }}       // Scale up on hover
            whileTap={{ scale: 0.95 }}         // Scale down on click
            className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 flex items-center gap-2"
          >
            <Download size={20} />            // Download icon
            Download CV                        // Button text
          </motion.button>
        </motion.div>

        {/* Skills showcase section */}
        <motion.div
          variants={itemVariants}            // Apply staggered animation
          className="mt-12 flex justify-center gap-6"
        >
          {/* Map through key technologies and create skill badges */}
          {['React', 'TypeScript', 'Node.js', 'TailwindCSS'].map((skill) => (
            <motion.span
              key={skill}                     // Unique key for React
              whileHover={{ scale: 1.1 }}     // Scale up on hover
              className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {skill}                         // Skill name
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - animated arrow at bottom */}
      <motion.div
        animate={{ y: [0, 10, 0] }}         // Vertical bouncing animation
        transition={{ 
          duration: 2,                     // 2 second animation duration
          repeat: Infinity                 // Loop forever
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />  // Down arrow icon
      </motion.div>
    </section>
  );
};
