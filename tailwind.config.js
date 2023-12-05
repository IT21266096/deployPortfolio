/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      clrTitle: '#33A9B2',
      clrSubTitle: '#BBE1E2',
      clrNormalTitle: '#91BDC3',
      clrOPTTitle: '#8FC4C5',
      clrContentTitle: '#000000',
      clrParagraph: '#3E3E3E',
    },
    extend: {
    },
  },
  plugins: [],
}
