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
      green: {
        DEFAULT: '#10B981',
        '50': '#8CF5D2',
        '100': '#79F3CB',
        '200': '#53F0BC',
        '300': '#2EEDAE',
        '400': '#13DF9B',
        '500': '#10B981',
        '600': '#0C855D',
        '700': '#075239',
        '800': '#031E15',
        '900': '#000000'
      },
    }
  },
  plugins: [],
}
