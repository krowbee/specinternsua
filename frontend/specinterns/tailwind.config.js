/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Путь к вашим файлам
  ],
  theme: {
    extend: {
      screens: {
        'sm':'533px',
        'md':'840px',
      }
    },
  },
  plugins: [],
}