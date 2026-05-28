/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zoho: {
          50:  '#EEF4FF',
          100: '#D9E6FF',
          200: '#BCCFFF',
          300: '#91AFFF',
          400: '#6485FF',
          500: '#3D5EFF',
          600: '#1B3CF5',
          700: '#1B5FD6',
          800: '#1A4DB5',
          900: '#0F2D6E',
          950: '#091A44',
        },
        accent: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 40%, #F5F0FF 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0F2D6E 0%, #091A44 100%)',
        'card-gradient': 'linear-gradient(135deg, #1B5FD6 0%, #3D5EFF 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        pulse2: 'pulse2 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-16px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':       { opacity: '1',   transform: 'scale(1.15)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        card:   '0 4px 24px -4px rgba(27,95,214,0.12)',
        'card-hover': '0 12px 40px -8px rgba(27,95,214,0.22)',
        glow:   '0 0 40px 0px rgba(27,95,214,0.25)',
        'glow-accent': '0 0 40px 0px rgba(249,115,22,0.25)',
      },
    },
  },
  plugins: [],
}
