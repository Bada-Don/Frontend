// src/components/common/Icon.jsx
import React from 'react';

const Icon = ({ name, className = '', size = 'md', color }) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base', // Material icons default size is often 24px, text-base can be around 16px. Adjust as needed.
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl', // For feature icons
  };

  const colorClass = color ? `text-${color}` : ''; // e.g., text-white, text-green-status

  return (
    <span className={`material-icons ${sizeClasses[size]} ${colorClass} ${className}`}>
      {name}
    </span>
  );
};

export default Icon;