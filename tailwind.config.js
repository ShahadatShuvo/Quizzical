/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#D6DBF5',
        DEFAULT: '#4D5B9E',
        dark: '#293264',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      red : {
        DEFAULT: '#EF4444',
        '50': '#FDEDED',
        '100': '#FCDADA',
        '200': '#F9B5B5',
        '300': '#F58F8F',
        '400': '#F26A6A',
        '500': '#EF4444',
        '600': '#E71414',
        '700': '#B30F0F',
        '800': '#800B0B',
        '900': '#4C0707'
      },
    }
  },
  plugins: [],
}
