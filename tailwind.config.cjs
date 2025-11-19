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
        'usf-beige': '#F7F3EE',
        'usf-green': '#7FB77E',
        'usf-orange': '#F2A84B',
        'usf-graytext': '#4A4A4A'
      },
      borderRadius: {
        'lg-soft': '12px'
      }
    }
  },
  plugins: []
};
