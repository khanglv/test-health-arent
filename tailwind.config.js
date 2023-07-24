/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: '#FFFFFF',
        primary: {
          300: '#FFCC21',
          350: '#8FE9D0',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        dark: {
          600: '#2E2E2E',
          500: '#414141'
        },
        grey: {
          400: '#777777'
        }
      }
    },
  },
  plugins: [],
}
