// src/components/layout/Footer.jsx
import React from 'react';
import Icon from '../common/Icon';
import { motion } from 'framer-motion';

const FooterLink = ({ href, children }) => (
  <li>
    <motion.a
      href={href}
      className="hover:text-text-inverted transition-colors duration-200"
      whileHover={{ x: 2 }}
    >
      {children}
    </motion.a>
  </li>
);

const SocialLink = ({ href, iconName }) => (
  <motion.a
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-start transition-colors duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon name={iconName} size="sm" className="text-gray-400 group-hover:text-white" />
  </motion.a>
);


const Footer = () => {
  const productLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#', label: 'API' }, // Placeholder links
    { href: '#', label: 'Integrations' },
    { href: '#', label: 'Security' },
  ];

  const supportLinks = [
    { href: '#', label: 'Help Center' },
    { href: '#', label: 'Contact Us' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Status' },
  ];

  const socialIcons = [
    // Replace 'link' with actual social media icon names if available in Material Icons, or use SVGs/other icon library
    { href: '#', iconName: 'link' }, // Placeholder, use 'facebook', 'twitter', 'linkedin' etc.
    { href: '#', iconName: 'link' },
    { href: '#', iconName: 'link' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };


  return (
    <footer className="py-16 bg-gray-900 text-gray-300">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-start to-primary-end rounded-xl flex items-center justify-center mr-3">
                <Icon name="gavel" className="text-text-inverted" size="xl" />
              </div>
              <h4 className="text-2xl font-bold text-text-inverted">LegalPilot</h4>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI-powered platform revolutionizing legal contract creation, evaluation, and understanding.
              Making legal processes accessible to everyone.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <SocialLink key={index} href={social.href} iconName={social.iconName} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h5 className="text-lg font-semibold text-text-inverted mb-6">Product</h5>
            <ul className="space-y-3">
              {productLinks.map(link => <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>)}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h5 className="text-lg font-semibold text-text-inverted mb-6">Support</h5>
            <ul className="space-y-3">
              {supportLinks.map(link => <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>)}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LegalPilot. All rights reserved. Making legal simple and accessible.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Icon name="security" className="text-green-status mr-2" size="sm" />
            <span className="text-sm text-gray-400">Enterprise-grade security</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;