// src/components/sections/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard'; // Ensure path is correct
import Icon from '../common/Icon'; // For stats if needed

const testimonialsData = [
  {
    quote: "LegalPilot has been a game-changer for our startup. We've saved over $15,000 in legal fees and can now handle contract negotiations with confidence. The AI risk assessment caught issues our previous lawyer missed!",
    authorName: 'Sarah Chen',
    authorTitle: 'Founder, TechFlow Solutions',
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuANZrFGUOdmjpSU4LFWuUcjKWGlhQpyguifmd7f4C0qDBgWTPTMHN8FsvoZji0wjvEZiCNMlUxINkIQdDddil44-xNxbxQ4JLicCdqLniQGTNkp13MPwY2PfzumLfUWjD_aITKurfQinfokmh8Jb2rrXH7lANPyrGKRcqQTmXiJC4YzOrBBtGntBx4NFkjp3Qmns8RIsVp0vScFBMrr5wTQ9o-zJ-iJXpWGsKfWuLd2P04LZh6YVaQdXyVD6EIdr8yuHh2bXo_Mrsla",
    rating: 5,
  },
  {
    quote: "The contract generation feature is incredible. What used to take me hours of research and drafting now takes 10 minutes. The AI understands context better than I expected, and the plain English explanations are perfect for my clients.",
    authorName: 'John Rodriguez',
    authorTitle: 'Freelance Business Consultant',
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLBP62V5eZwBlREQz00gUl0RPSFSjoHGoPAz_8CgKHOmLp7o6NsB-IxAhina3mBA0bmT6spweeOvDuUAe0buk1-RB61yvaxGj1HZ-UavYpnynRWEsNxpte2KrueICgjTzC3bm4hSfWF3H9Rmn0wXgkhzTvvR5YFM4Hr5GcyhJzXvci5iule9MBL5aZ_iCn0qWRnK0lIhEVWFsb9W5U3LLWQRxq8wXjcv6BCHljaUn6LK9aBv8c-0OMRnewmt59fE-aa4u-sXvHDezb",
    rating: 5,
  },
  {
    quote: "As a small business owner with zero legal background, LegalPilot has been a lifesaver. The 24/7 chat assistant feels like having a legal expert on speed dial. Highly recommend to any entrepreneur!",
    authorName: 'Maria Gonzalez',
    authorTitle: 'Owner, Artisan Bakery Co.',
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPLI7HYA6ysyE6u6AWKpbcidi6HWlrAlQWWpNSKuV9RqvuXAKuKvHVy3avSmrrJaY6Yns_ny07JJXcpxP6nnxvUNq_ysR9OVLSvOh2wOW1vxWNPHASOxOAE0kYE4NBkWkTlWLbE-2nVydSAYsIgO4_qF_aQpwxXC11vy-_KpdyT5AHLL5hqR_mm9Q9qFwlccF_GOqIUrjJwsnt9MeLb4cDnKnt_RHqHywYPgjy_rp4s38uqYTIFJKGMf2sYLsDAN6bFS4LM-0jFzVZ",
    rating: 5,
  },
];

const statsData = [
  { value: '2,500+', label: 'Happy Customers' },
  { value: '50,000+', label: 'Contracts Generated' },
  { value: '$2M+', label: 'Legal Fees Saved' },
  { value: '99.8%', label: 'Accuracy Rate' },
];

const TestimonialsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariant = {
     hidden: { opacity:0, y:30 },
     visible: { opacity:1, y:0, transition: { duration:0.6, ease:"easeOut"}}
  }


  return (
    // section-fade from original HTML (fadeInUp keyframes) is handled by Framer Motion
    <motion.section
      className="py-24 bg-bg-card" // Original: bg-white
      id="testimonials"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          variants={itemVariant} // Individual animation for header
        >
          <h2 className="text-5xl font-bold text-text-primary mb-6">
            Loved by <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their legal workflows with LegalPilot
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
              avatarSrc={testimonial.avatarSrc}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={itemVariant} // Animates the stats grid as a whole
                                // For individual stat animation, map and apply variants
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              // Apply individual animation to each stat item if desired, by adding variants here
              // For simplicity, the parent grid has an itemVariant for now.
              // Example for individual:
              // initial={{ opacity:0, y:20 }}
              // whileInView={{ opacity:1, y:0 }}
              // transition={{ delay: index * 0.1, duration: 0.5 }}
              // viewport={{ once:true }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;