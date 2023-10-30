/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'brand-100': 'rgb(255 237 213 / 1)',
        'brand-200': 'rgb(254 215 170 / 1)',
        'brand-600': 'rgb(234 88 12 / 1)',
        'brand-700': 'rgb(210 65 21 / 1)',
        'slate-800': 'rgb(30 41 59 / 1)',
        'red-600': 'rgb(220 38 38 / 1)',
        'blue-background': 'rgb(199 230 248 / 1)'
      },
      colors: {
        'brand-200': 'rgb(254 215 170 / 1)',
        'brand-600': 'rgb(234 88 12 / 1)',
        'brand-700': 'rgb(210 65 21 / 1)',
        'white-100': 'rgb(210 65 21 / 1)',
        'slate-800': 'rgb(30 41 59 / 1)',
        'gray-title': 'rgb(30 41 59 / 1)',
        'gray-subtitle': 'rgb(71 85 105 / 1)',
        'gray-separator': 'rgb(71 85 105 / 0.2)'
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
