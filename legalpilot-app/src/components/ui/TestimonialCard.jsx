// src/components/ui/TestimonialCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon'; // Ensure path is correct

const TestimonialCard = ({ quote, authorName, authorTitle, avatarSrc, rating = 5 }) => {
  // .testimonial-card:
  // background: white; -> bg-bg-card
  // border-radius: 20px; -> rounded-2xl or 3xl
  // box-shadow: 0 10px 30px rgba(0,0,0,0.1); -> shadow-lg
  // transition: all 0.3s ease;
  // position: relative;
  // ::before (quote mark)
  // &:hover: transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); -> shadow-xl or custom

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale:0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <motion.div
      className="p-8 relative bg-bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
      // Using rounded-3xl. Original had border-radius: 20px; -> rounded-2xl
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }} // Custom shadow on hover
    >
      {/* Quote Mark ::before pseudo-element replaced by an absolute positioned div */}
      <div
        className="absolute top-[-10px] left-[20px] text-4xl font-bold opacity-30 pointer-events-none"
        style={{ color: 'var(--color-primary-start)' }} // Use themed color
        aria-hidden="true"
      >
        “
      </div>

      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400"> {/* Hardcoded Tailwind yellow-400 */}
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} name="star" size="md" />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <Icon key={i + rating} name="star_border" size="md" /> // For empty stars if needed
          ))}
        </div>
      </div>
      <p className="text-text-secondary mb-6 text-lg leading-relaxed relative z-10"> {/* z-10 to be above quote mark */}
        {quote}
      </p>
      <div className="flex items-center">
        <img
          alt={`${authorName} avatar`}
          className="w-14 h-14 rounded-full mr-4 ring-2 ring-blue-100" // ring-blue-100 is specific
          src={avatarSrc}
        />
        <div>
          <p className="font-bold text-text-primary text-lg">{authorName}</p>
          <p className="text-text-muted">{authorTitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;