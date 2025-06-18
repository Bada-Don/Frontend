// src/components/sections/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard'; // Ensure path is correct

const featuresData = [
  {
    iconName: 'description',
    title: 'Smart Contract Generation',
    description: 'Create professional, legally-sound contracts in minutes with our AI-powered generator. Choose from 50+ templates or build custom contracts tailored to your specific needs.',
    linkText: 'Explore Templates',
    linkHref: '#',
    gradientFrom: 'from-blue-500', // Tailwind colors
    gradientTo: 'to-purple-600',
    linkColor: 'text-blue-600', // text-link from theme
    dotColors: ['bg-blue-500', 'bg-purple-500', 'bg-pink-500'],
  },
  {
    iconName: 'security',
    title: 'AI Risk Assessment',
    description: 'Upload existing contracts and get instant AI-powered risk analysis. Identify unfavorable clauses, potential liabilities, and negotiation opportunities before you sign.',
    linkText: 'Try Risk Scan',
    linkHref: '#',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600',
    linkColor: 'text-green-600',
    dotColors: ['bg-green-500', 'bg-teal-500', 'bg-emerald-500'],
  },
  {
    iconName: 'translate',
    title: 'Plain English Translator',
    description: "Transform complex legal jargon into clear, understandable language. Our AI breaks down contract terms so you know exactly what you're agreeing to.",
    linkText: 'See Translation',
    linkHref: '#',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    linkColor: 'text-purple-600',
    dotColors: ['bg-purple-500', 'bg-pink-500', 'bg-rose-500'],
  },
  {
    iconName: 'chat',
    title: '24/7 Legal Assistant',
    description: 'Get instant answers to your legal questions from our AI assistant, trained on millions of legal documents and constantly updated with the latest legal precedents.',
    linkText: 'Start Chatting',
    linkHref: '#',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-600',
    linkColor: 'text-yellow-600',
    dotColors: ['bg-yellow-500', 'bg-orange-500', 'bg-red-500'],
  },
];

const FeaturesSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Individual item animation variant (used by FeatureCard) is defined within FeatureCard.jsx

  return (
    // section-fade from original HTML (fadeInUp keyframes) is handled by Framer Motion
    <motion.section
      className="py-24 bg-bg-default" // Original: bg-gray-50
      id="features"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% of section is in view
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity:0, y:30 }} // Simpler animation for the header part
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration:0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-text-primary mb-6">
            Legal <span className="gradient-text">Superpowers</span>, Simplified
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Unlock AI-driven tools designed to make your legal processes faster, smarter, and more secure.
            Experience the future of legal technology today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkHref={feature.linkHref}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
              linkColor={feature.linkColor}
              dotColors={feature.dotColors}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;