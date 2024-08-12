/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './renderer/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rm-blue-100': '#367CF4',
        'rm-blue-200': '#367cc8',
      },
    },
  },
  plugins: [],
};
