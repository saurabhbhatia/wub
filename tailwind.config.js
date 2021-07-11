const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading': ['IBM Plex Mono', 'monospace'],
        'body': ['IBM Plex Mono', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};