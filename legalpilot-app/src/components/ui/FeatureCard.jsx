// src/components/ui/FeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon'; // Ensure path is correct

const FeatureCard = ({ iconName, title, description, linkText, linkHref, gradientFrom, gradientTo, linkColor, dotColors }) => {
  // .feature-card:
  // border-radius: 20px; -> rounded-2xl
  // background: white; -> bg-bg-card (themed)
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); -> shadow-lg (Tailwind default or custom in config)
  // transition: all 0.3s ease;
  // border: 1px solid rgba(0, 0, 0, 0.05); -> border border-border-light (themed)
  // &:hover: transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); -> shadow-xl

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <motion.div
      className="p-10 group bg-bg-card rounded-3xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 ease-out"
      // Using rounded-3xl for a slightly larger radius, matching interactive demo card. Or use rounded-2xl.
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)" }}
      // Tailwind's shadow-xl is "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
      // The original HTML is "0 20px 60px rgba(0,0,0,0.15)". You can define a custom shadow-card-hover in tailwind.config.js
      // for exact match or use a slightly different Tailwind shadow. For now, relying on hover:shadow-xl.
    >
      <div className="flex items-center mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mr-4 shrink-0`}
        >
          <Icon name={iconName} className="text-text-inverted" size="2xl" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary mb-6 text-lg leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <a
          href={linkHref}
          className={`font-semibold ${linkColor} hover:opacity-80 transition-opacity flex items-center`}
        >
          {linkText} <Icon name="arrow_forward" className="text-sm ml-1" />
        </a>
        <div className="flex space-x-2">
          {dotColors.map((color, index) => (
            <div key={index} className={`w-2 h-2 ${color} rounded-full`}></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;