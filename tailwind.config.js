/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'hacker-green': '#00ff00',
        'matrix-black': '#000000',
      },
      animation: {
        'matrix-rain': 'matrix 20s linear infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
