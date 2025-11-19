/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'usf-brown': '#6B4F3A',
        'usf-cream': '#F5F5DC',
        'usf-white': '#FFFFFF',
        'usf-green': '#7FB77E',
        'usf-green-light': '#9FE0A4',
        'usf-orange': '#F2A84B',
        'usf-graytext': '#4A4A4A'
      },
      borderRadius: {
        'card': '20px',
        'lg-soft': '12px'
      },
      boxShadow: {
        'card-soft': '0 12px 30px rgba(107,79,58,0.10)'
      }
    }
  },
  plugins: []
};
