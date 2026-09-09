/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loanzone: {
          navy: '#063B73',
          'navy-dark': '#04244B',
          'navy-deep': '#031730',
          'navy-light': '#0B5ED7',
          orange: '#F97316',
          'orange-hover': '#EA580C',
          'orange-light': '#FFEDD5',
          'orange-50': '#FFF7ED',
          green: '#16A34A',
          'green-hover': '#15803D',
          'green-light': '#DCFCE7',
          'green-50': '#F0FDF4',
          bg: '#F8FAFC',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        handwritten: ['Caveat', 'Dancing Script', 'cursive'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'premium': '0 20px 25px -5px rgba(6, 59, 115, 0.1), 0 10px 10px -5px rgba(6, 59, 115, 0.04)',
        'floating': '0 25px 50px -12px rgba(6, 59, 115, 0.25)',
      }
    },
  },
  plugins: [],
}
