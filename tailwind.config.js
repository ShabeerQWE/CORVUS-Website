/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#0B0B0B',
        'text-primary': '#FFFFFF',
        'accent-blue': {
          DEFAULT: '#E6F0FF',
          highlight: '#66CCFF',
        },
      },
    },
  },
  plugins: [],
}