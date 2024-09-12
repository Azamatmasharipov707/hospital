/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#336CFB',
        primary2: '#27AE60',
        secondary: '#52575C',
        tertiary: '#EB5757',
        borderColor: '#BBBBBB'
      }
    },
    boxShadow: {
      myShadow: '0px 12px 16px 0px #7D7D7D40'
    }
  },
  plugins: [],
}

