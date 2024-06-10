/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '75/25': '75% 25%',
      },
    },
    fontSize: {
      '2.5xl': '1.8rem',
      '3.5xl': '2.1rem',
    },
  },
  plugins: [require('flowbite/plugin')],
};
