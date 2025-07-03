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
        'bg-gray': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'border-gray': '#2A2A2A',
        'accent-blue': '#3B82F6',
        'accent-purple': '#8B5CF6',
        'accent-green': '#10B981',
        'accent-orange': '#F59E0B',
      },
    },
  },
  plugins: [],
}