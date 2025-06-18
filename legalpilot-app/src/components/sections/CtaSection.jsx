// src/components/sections/CtaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Icon from '../common/Icon';

const CtaSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const checkItems = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime"
  ];

  return (
    // Original gradient: from-blue-600 to-purple-700
    // This could be --gradient-cta or similar in theme.css if used elsewhere
    // For now, using direct Tailwind classes.
    <motion.section
      className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-text-inverted"
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-6">
          Ready to Transform Your Legal Workflow?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100" // text-blue-100 for slightly muted white
        >
          Join thousands of professionals who have revolutionized their contract processes with LegalPilot.
          Start your free trial today and experience the future of legal technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Button variant 'primary' for CTA might need specific styling if it's white bg on dark section */}
          <Button
            href="#pricing"
            // variant="primary" // Re-evaluate: Primary button is dark gradient. For dark bg, we need light button.
            className="bg-white text-link hover:bg-gray-100" // Custom styling for this instance
            size="lg"
            iconLeft="rocket_launch"
          >
            Start Free Trial
          </Button>
          <Button
            href="#demo" // Assuming #demo is the hero interactive demo
            variant="outline" // Outline on dark bg needs white border/text
            className="border-2 border-white text-white hover:bg-white hover:text-link" // Custom styling for outline
            size="lg"
            iconLeft="play_arrow"
          >
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-blue-100"
        >
          {checkItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Icon name="check" className="mr-2" size="sm" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;