/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'brand-700': 'rgb(210 65 21 / 1)',
        'slate-800': 'rgb(30 41 59 / 1)',
        'red-600': 'rgb(220 38 38 / 1)'
      },
      colors: {
        'brand-700': 'rgb(210 65 21 / 1)',
        'white-100': 'rgb(210 65 21 / 1)',
        'slate-800': 'rgb(30 41 59 / 1)',
        'gray-title': 'rgb(30 41 59 / 1)',
        'gray-subtitle': 'rgb(71 85 105 / 1)'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
