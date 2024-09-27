import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {

    screens: {

      xs: '375px',
      // => @media (min-width: 375px) { ... }

      '2xs': '425px',
      // => @media (min-width: 375px) { ... }

      sm: '575px',
      // => @media (min-width: 575px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '991px',
      // => @media (min-width: 991px) { ... }

      '2lg': '1024px',

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },

    extend: {
      colors: {
        'theme-dark': {
          DEFAULT: '#131313',
          50: '#6F6F6F',
          100: '#656565',
          200: '#505050',
          300: '#3C3C3C',
          400: '#272727',
          500: '#131313',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
      }
    }
  },

  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            primary: {
              DEFAULT: '#000000',
              foreground: '#ffffff'
            },
          }
        },

        dark: {
          colors: {
            background: '#131313',
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#000000'
            },
          }
        }
      }
    })
  ],
}
