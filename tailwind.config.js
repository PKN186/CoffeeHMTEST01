// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: {
        50:  '#E6F2EE',
        100: '#BFDFCD',
        200: '#99CCA9',
        300: '#73B885',
        400: '#4DA460',
        DEFAULT: '#26823C',
        600: '#1F6A30',
        700: '#194E25',
        800: '#12351B',
        900: '#0B1F11',
      },
      'overlay-green': 'rgba(38,130,60,0.6)',
      neutral: {
        50:  '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        DEFAULT: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      gray: {
        50:  '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        DEFAULT: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      red: {
        50:  '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        DEFAULT: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
    },
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(38,130,60,0.85) 0%, rgba(38,130,60,0.6) 100%)',
      },
      borderRadius: {
        card: '2rem',
        btn:  '9999px',
      },
      boxShadow: {
        'card-md': '0 8px 24px rgba(0,0,0,0.1)',
        innerNav: 'inset 0 2px 4px rgba(0,0,0,0.06)',
      },
      spacing: {
        '4.5': '1.125rem',
        '7':   '1.75rem',
        '9':   '2.25rem',
      },
      fontSize: {
        '2xl': ['1.75rem', '2rem'],
        base:  ['1rem',   '1.5rem'],
      },
    },
  },
  plugins: [],
}
