// src/components/sections/PricingSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../ui/PricingCard'; // Ensure path is correct
import Icon from '../common/Icon';

const pricingData = {
  monthly: [
    {
      planName: 'Starter',
      description: 'Perfect for individuals and small projects',
      price: '$19',
      pricePer: '/month',
      billed: 'Billed monthly',
      features: [
        '5 Contract generations per month',
        '3 Risk evaluations per month',
        'Basic legal chat support',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline', // Matches original: border-2 border-blue-600 text-blue-600
    },
    {
      planName: 'Professional',
      description: 'Ideal for growing businesses and consultants',
      price: '$49',
      pricePer: '/month',
      billed: 'Billed monthly',
      features: [
        'Unlimited contract generations',
        '15 Risk evaluations per month',
        'Advanced AI chat assistant',
        'Plain English translator',
        'Priority support',
        'Custom templates',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary', // Custom style for popular: bg-white text-purple-600
      isPopular: true,
    },
    {
      planName: 'Enterprise',
      description: 'For large teams and organizations',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Unlimited risk evaluations',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA & Premium support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline',
      onButtonClick: () => console.log('Contact Sales clicked'), // Placeholder
    },
  ],
  annual: [ // Add annual data if you implement the toggle
    {
      planName: 'Starter',
      description: 'Perfect for individuals and small projects (Annual)',
      price: '$15', // Example discounted price
      pricePer: '/month',
      billed: 'Billed annually',
      features: [
        '5 Contract generations per month',
        '3 Risk evaluations per month',
        'Basic legal chat support',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline',
    },
    {
      planName: 'Professional',
      description: 'Ideal for growing businesses and consultants (Annual)',
      price: '$39', // Example discounted price
      pricePer: '/month',
      billed: 'Billed annually',
      features: [
        'Unlimited contract generations',
        '15 Risk evaluations per month',
        'Advanced AI chat assistant',
        'Plain English translator',
        'Priority support',
        'Custom templates',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      isPopular: true,
    },
    {
      planName: 'Enterprise',
      description: 'For large teams and organizations (Annual)',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Unlimited risk evaluations',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA & Premium support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline',
      onButtonClick: () => console.log('Contact Sales clicked'),
    },
  ],
};


const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const currentPlans = pricingData[billingCycle];

  const headerAnimation = {
    hidden: { opacity:0, y:30 },
    visible: { opacity:1, y:0, transition: { duration:0.6, ease: "easeOut"}}
  };

  return (
    // section-fade from original HTML (fadeInUp keyframes) is handled by Framer Motion
    <motion.section
      className="py-24 bg-bg-default" // Original: bg-gray-50
      id="pricing"
      variants={sectionVariants} // This will apply to the direct children of motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          variants={headerAnimation} // Header animates as one block
        >
          <h2 className="text-5xl font-bold text-text-primary mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI features and come with a
            14-day free trial. No credit card required.
          </p>
          <div className="inline-flex bg-bg-card rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300
                ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-primary-start to-primary-end text-text-inverted' : 'text-text-secondary hover:bg-gray-100'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300
                ${billingCycle === 'annual' ? 'bg-gradient-to-r from-primary-start to-primary-end text-text-inverted' : 'text-text-secondary hover:bg-gray-100'}`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </motion.div>

        {/* The grid itself will be a child, so sectionVariants' staggerChildren applies to it as a whole.
            Each PricingCard inside the grid then has its own variant for entry. */}
        <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            key={billingCycle} // Add key here to force re-render and re-animate cards on billingCycle change
            variants={sectionVariants} // Stagger children (PricingCard)
            initial="hidden"
            animate="visible" // Animate when key changes
        >
          {currentPlans.map((plan, index) => (
            <PricingCard
              key={plan.planName + index} // Ensure unique key
              planName={plan.planName}
              description={plan.description}
              price={plan.price}
              pricePer={plan.pricePer}
              billed={plan.billed}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isPopular={plan.isPopular || false}
              onButtonClick={plan.onButtonClick}
              // Pass themed colors based on popularity for more control from PricingCard
              priceTextColor={plan.isPopular ? 'text-white' : 'text-text-primary'}
              textColor={plan.isPopular ? 'text-white' : 'text-text-secondary'}
              iconColor={plan.isPopular ? 'text-yellow-400' : 'text-green-check'}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true, amount:0.5 }}
          transition={{ duration:0.5, delay:0.3 }}
        >
          <div className="inline-flex items-center bg-bg-card rounded-full px-8 py-4 shadow-lg">
            <Icon name="verified" className="text-green-check mr-3" size="md" /> {/* Use themed green */}
            <span className="font-semibold text-text-primary">30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;