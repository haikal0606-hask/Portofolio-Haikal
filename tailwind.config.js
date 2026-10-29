/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#e8eef8',
          100: '#c5d3ed',
          200: '#9eb6e0',
          300: '#7699d3',
          400: '#5882ca',
          500: '#3a6cc1',
          600: '#2f5aaa',
          700: '#224690',
          800: '#163277',
          900: '#0F172A',
          950: '#080d1a',
        },
        cyan: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06B6D4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-pattern.svg')",
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#06B6D4' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #06B6D4, 0 0 20px #06B6D4' },
          'to': { boxShadow: '0 0 20px #06B6D4, 0 0 40px #06B6D4, 0 0 60px #06B6D4' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 15px rgba(6, 182, 212, 0.5)',
        'cyan-glow-lg': '0 0 30px rgba(6, 182, 212, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(6, 182, 212, 0.2)',
      },
    },
  },
  plugins: [],
}
