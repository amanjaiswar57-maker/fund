/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      gradientColorStops: {
        'gpay-blue': '#4285F4',
        'gpay-green': '#34A853',
        'gpay-yellow': '#FBBC04',
        'gpay-red': '#EA4335',
      }
    },
  },
  plugins: [],
}
