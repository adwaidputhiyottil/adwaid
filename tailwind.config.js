/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Righteous"', 'cursive'],
        body: ['"Space Mono"', 'monospace'],
      },
      colors: {
        brutal: {
          bg: '#f4ebd0',
          red: '#ff6b6b',
          blue: '#4ecdc4',
          yellow: '#ffe66d',
          pink: '#ff9ff3',
          green: '#2ecc71',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-active': '2px 2px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
