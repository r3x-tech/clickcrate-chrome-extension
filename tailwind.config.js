/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: process.env.NODE_ENV === 'development' ? [{ pattern: /./ }] : [],
  theme: {
    extend: {
      colors: {
        twitter: {
          neutral: {
            100: '#0f1419',
            80: '#202327',
            70: '#2f3336',
            50: '#6E767D',
            40: '#C4C4C4',
            30: '#d9d9d9',
            20: '#eff3f4',
          },
          accent: '#1d9bf0',
          success: '#00c466',
          error: '#ff6f6f',
        },
      },
      fontSize: {
        text: ['1rem', '1.2rem'],
        subtext: ['0.867rem', '1.067rem'],
      },
    },
  },
  plugins: [],
};
