// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon';
import Button from '../common/Button';
import InteractiveDemo from '../ui/InteractiveDemo'; // Import the new component

const FloatingShape = ({ className, animationDelay, size }) => (
  <motion.div
    className={`absolute rounded-full bg-white bg-opacity-10 ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: animationDelay,
    }}
  />
);

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, // Delay after navbar animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  // Styles for .hero-gradient:
  // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -> bg-gradient-primary (from theme)
  // position: relative;
  // overflow: hidden;
  // ::before (overlay with backdrop-filter: blur(100px))
  // For the ::before effect, we'll use a nested div.

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 text-text-inverted overflow-hidden bg-gradient-to-r from-primary-start to-primary-end">
      {/* Background Overlay (replaces ::before) */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--color-bg-hero-overlay)', backdropFilter: 'blur(100px)' }}
      ></div>

      {/* Floating Shapes Container (replaces .floating-shapes) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <FloatingShape className="top-[-150px] right-[-150px]" animationDelay={-10} size="300px" />
        <FloatingShape className="bottom-[-100px] left-[-100px]" animationDelay={-5} size="200px" />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10" // z-10 for hero-content
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate on load
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-6 py-2 mb-8"
          >
            <Icon name="auto_awesome" className="text-sm mr-2" /> {/* Color will be inherited text-text-inverted */}
            <span className="text-sm font-medium">AI-Powered Legal Solutions</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Create, Evaluate & Understand
            <span className="block hero-text-gradient"> {/* Uses hero-text-gradient class for specific gradient */}
              Legal Contracts
            </span>
            <span className="block text-4xl md:text-5xl font-semibold">Effortlessly</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-hero-muted mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your legal workflow with AI-powered contract generation, risk assessment, and plain-English explanations.
            <strong> No legal expertise required.</strong>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button href="#features" variant="primary" size="lg" iconLeft="rocket_launch">
              Start Free Trial
            </Button>
            <Button href="#demo" variant="secondary" size="lg" iconLeft="play_arrow">
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Interactive Demo Component */}
        <motion.div variants={itemVariants} className="max-w-5xl mx-auto" id="demo">
            <InteractiveDemo />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;