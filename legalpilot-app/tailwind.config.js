/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your theme colors here, callable with CSS variables
        // Example: bg-primary-start, text-theme-accent
        'primary-start': 'var(--color-primary-start)',
        'primary-end': 'var(--color-primary-end)',
        'accent-start': 'var(--color-accent-start)',
        'accent-end': 'var(--color-accent-end)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverted': 'var(--color-text-inverted)',
        'bg-default': 'var(--color-bg-default)',
        'bg-card': 'var(--color-bg-card)',
        'green-status': 'var(--color-green-status)',
        'link': 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem', // 16px
        '2xl': '1.25rem', // 20px
        '3xl': '1.5rem', // 24px
        '4xl': '2rem', // 32px
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 20px var(--color-primary-start-alpha-30)', // Example for cta-button
        'button-hover': '0 8px 30px var(--color-primary-start-alpha-40)', // Example for cta-button hover
      },
      // You might need to extend more based on the exact styles
    },
  },
  plugins: [],
}