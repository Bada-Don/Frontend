// src/components/common/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon'; // Assuming Icon.jsx is in the same directory or adjust path

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'link', 'icon'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  iconLeft,
  iconRight,
  iconSize = 'sm', // default icon size for buttons
  disabled = false,
  type = 'button', // 'button', 'submit', 'reset'
  target,
  rel,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base', // Adjusted from original px-6 py-2
    lg: 'px-10 py-4 text-lg font-semibold',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-start to-primary-end text-text-inverted shadow-button hover:shadow-button-hover disabled:opacity-50',
    secondary: 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-text-inverted hover:bg-opacity-30 disabled:opacity-50', // cta-button-secondary like
    outline: `border-2 border-link text-link hover:bg-link hover:text-text-inverted disabled:opacity-50 disabled:border-text-muted disabled:text-text-muted`,
    ghost: 'text-text-secondary hover:bg-gray-100 hover:text-text-primary disabled:opacity-50',
    link: 'text-link hover:text-link-hover font-semibold disabled:opacity-50',
    icon: 'p-2 hover:bg-gray-200 disabled:opacity-50 rounded-full', // For icon-only buttons like hamburger menu
  };

  const motionProps = {
    whileHover: { scale: (variant === 'primary' || variant === 'secondary') ? 1.05 : 1.02, y: (variant === 'primary' || variant === 'secondary') ? -2 : 0 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  const buttonContent = (
    <>
      {iconLeft && <Icon name={iconLeft} className={`mr-2`} size={iconSize} />}
      {children}
      {iconRight && <Icon name={iconRight} className={`ml-2`} size={iconSize} />}
    </>
  );

  const commonProps = {
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
    disabled,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...commonProps}
        {...motionProps}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...commonProps}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;