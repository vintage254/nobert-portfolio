/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EBF8FF',
          100: '#E1F0FF',
          200: '#B8DBFF',
          300: '#8FC7FF',
          400: '#66B2FF',
          500: '#3D9EFF',
          600: '#0F8AFF',
          700: '#0070E0',
          800: '#005BB4',
          900: '#004788',
        },
      },
    },
  },
  plugins: [],
}

