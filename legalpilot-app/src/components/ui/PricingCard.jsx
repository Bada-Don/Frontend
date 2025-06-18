// src/components/ui/PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon';
import Button from '../common/Button'; // Assuming your Button component is robust

const PricingCard = ({
  planName,
  description,
  price,
  pricePer,
  billed,
  features,
  buttonText,
  buttonVariant = 'outline',
  isPopular = false,
  onButtonClick,
  priceTextColor = 'text-text-primary',
  textColor = 'text-text-secondary',
  iconColor = 'text-green-check',
  borderColor = 'border-gray-200',
  popularBadgeText = "MOST POPULAR"
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  // Adjusted base padding, and popular card gets more top padding due to the badge
  const basePadding = "p-8";
  const popularPadding = isPopular ? "pt-12 pb-8 px-8" : basePadding; // More top padding for popular

  const popularTransform = isPopular ? "scale-105" : ""; // Apply scale if popular
  const popularShadow = isPopular ? "shadow-2xl" : "shadow-lg";
  const popularBg = isPopular ? "bg-gradient-to-r from-primary-start to-primary-end text-text-inverted" : `bg-bg-card ${borderColor}`;

  const popularHoverEffect = isPopular ? {} : { y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ease-out flex flex-col ${popularTransform} ${popularShadow} ${popularBg} ${popularPadding}`}
      // Added flex flex-col to help with content distribution
      variants={cardVariants}
      whileHover={popularHoverEffect}
      style={{ minHeight: isPopular ? '600px' : 'auto' }} // Give popular card a bit more min-height as a fallback. Adjust as needed.
                                                       // Or rely on flex-grow for the content area.
    >
      {/* Top border animation */}
      {!isPopular && ( // Only show hover border animation for non-popular cards
        <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-primary-end"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
        />
      )}
      {/* Popular badge has its own gradient, so the top border animation might conflict or be less visible.
          The original popular card didn't have the animated top border.
      */}


      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"> {/* Adjusted badge positioning */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
            {popularBadgeText}
          </div>
        </div>
      )}

      {/* Main Content Area - Allow it to grow */}
      <div className="flex flex-col flex-grow"> {/* Added flex-grow here */}
        <div className="text-center mb-8"> {/* Removed pt-4, handled by popularPadding */}
          <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-text-primary'}`}>{planName}</h3>
          <p className={`${isPopular ? 'text-blue-100' : 'text-text-secondary'} mb-4 text-sm`}>{description}</p> {/* text-sm for desc */}
          <div className="mb-4">
            <span className={`text-5xl font-bold ${isPopular ? 'text-white' : priceTextColor}`}>
              {price}
            </span>
            {pricePer && <span className={`${isPopular ? 'text-blue-200' : 'text-text-muted'}`}>{pricePer}</span>}
          </div>
          {billed && <p className={`text-sm ${isPopular ? 'text-blue-200' : 'text-text-muted'}`}>{billed}</p>}
        </div>

        <ul className="space-y-3 mb-8 flex-grow"> {/* Reduced space-y slightly, added flex-grow */}
          {features.map((feature, index) => (
            <li key={index} className="flex items-start"> {/* items-start for long features */}
              <Icon name="check_circle" className={`${isPopular ? 'text-yellow-400' : iconColor} mr-3 mt-1 shrink-0`} size="md" />
              <span className={`${isPopular ? 'text-white' : textColor} text-sm`}>{feature}</span> {/* text-sm for features */}
            </li>
          ))}
        </ul>

        {/* Button container - Pushes to bottom because of flex-grow on content above */}
        <div className="mt-auto"> {/* This pushes button to bottom if card is flex-col */}
            <Button
                onClick={onButtonClick}
                // variant={isPopular ? 'primary' : buttonVariant} // This logic might need refinement based on your Button component.
                                                            // The original HTML had specific styles for the popular button.
                className={`w-full py-3 px-6 font-semibold rounded-full transition-all
                    ${isPopular
                        ? 'bg-white text-purple-600 hover:bg-gray-100' // Matches original style
                        : `border-2 ${borderColor === 'border-gray-200' ? 'border-link' : borderColor} ${borderColor === 'border-gray-200' ? 'text-link' : textColor} hover:bg-link hover:text-white`
                    }
                `}
            >
                {buttonText}
            </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;