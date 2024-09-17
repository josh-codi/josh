/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#c8721d',
        themeFade: '#ff770077'
      },
      screens: {
        xs: '450px',
      },
    }
  },
  plugins: [],
}