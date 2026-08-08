/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['"Abril Fatface"', 'serif'],
      },
      colors: {
        course: {
          bg: '#f3eeff',
          'bg-alt': '#ebe4f9',
          surface: '#ffffff',
          text: '#2b1821',
          muted: '#5c4d6a',
          accent: '#6d27f9',
          'accent-light': '#8c52ff',
          highlight: '#fa16ff',
          border: '#d4c4f0',
        },
      },
    },
  },
  plugins: [],
}
