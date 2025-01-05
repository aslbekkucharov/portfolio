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
          50: '#414141',
          100: '#3C3C3C',
          200: '#323232',
          300: '#272727',
          400: '#1D1D1D',
          500: '#131313',
          600: '#101010',
          700: '#0E0E0E',
          800: '#0B0B0B',
          900: '#090909',
          950: '#080808'
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
