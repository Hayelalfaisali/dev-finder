/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0079FF',
          dark: '#60ABFF',
        },
        background: {
          light: '#F6F8FF',
          dark: '#141D2F',
        },
        card: {
          light: '#FEFEFE',
          dark: '#1E2A47',
        },
        text: {
          light: '#4B6A9B',
          dark: '#FFFFFF',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
