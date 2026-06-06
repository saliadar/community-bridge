/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4622D',
        secondary: '#2C5282',
        accent: '#D4A574',
        light: '#F5F1E8',
        dark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Lato"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #C4622D 0%, #E8B4A8 100%)',
        'gradient-cool': 'linear-gradient(135deg, #2C5282 0%, #4A90E2 100%)',
      },
    },
  },
  plugins: [],
}
