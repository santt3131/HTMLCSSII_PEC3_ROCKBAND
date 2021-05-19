const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '2xl': '1.6rem',
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      'calc-tl': 'calc(3rem + 5vw)',
      'calc-sbtl': 'calc(2rem + 2vw)',
      'calc-chr': 'calc(1em + 2.5vw)',
      'calc-plc': 'calc(1.2em + 2vh)',
      'calc-tl-cd': 'calc(1.5em + 2vw)',
      'calc-sbtl-cd': 'calc(1em + 2vw)',
    },
    letterSpacing: {
      widest: '4vh',
    },
    colors: {
      'gray-dk': '#212529',
      'gold-one': '#c69b7c',
      'gold-two': '#cb9b51',
      'gold-three': '#f6e27a',
      'gold-four': '#f6f2c0',
      'gold-five': '#f6e27a',
      'gold-six': '#c69b7c',
      'blue-dk': 'rgb(3, 22, 46)',
      'black': colors.black,
      transparent: 'transparent',
    },
    textColor: {
      transparent: 'transparent',
      'gray-lt': 'rgba(255, 255, 255, .55)',
      'white': colors.white,
      'black': colors.black,
      'yll-lgt': '#f0e088',
    },
    fontFamily: {
      sans: ['Open Sans'],
      vollkorn: ['vollkorn'],
    },
    extend: {
      height:{
        'screen/10': '10vh',
        'screen/1.25': '80vh',
        'shadow': '500px'
      },
      width:{
        'cl-two':'calc(50vw - 3rem)',
        'cl-three':'calc(33.33vw - 3rem)'
      },
      gridTemplateColumns: {
       'special': '1fr 1fr 1fr 1fr calc(2rem + 2vw)',
      },
      gridTemplateRows: {
       'special': '20vh 20vh 20vh 20vh',
      },
      margin: {
        'shadow': '-500px',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
