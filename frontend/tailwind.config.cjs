module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b9ddff',
          300: '#8ec8ff',
          400: '#5fb0ff',
          500: '#3b9bff',
          600: '#217ef0',
          700: '#1a63c0',
          800: '#164f98',
          900: '#123f79'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
