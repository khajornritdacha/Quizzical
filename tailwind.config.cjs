/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'dark-violet': '#293264',
        'medium-violet': '#4D5B9E',
        'light-violet': '#D6DBF5',
        'light-sky': '#F5F7FB',
      },
      backgroundImage: {
        'blob-yellow': 'url(./src/assets/blobsYellow)',
        'blob-blue': 'url(./src/assets/blobsBlue)',
      },
    },
  },
  plugins: [],
};
