/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        worldRank: 'url("/hero-image-wr.jpg")'
      },
      colors: {
        midnight: '#1B1D1F',
        stone: '#282B30',
        smoke: '#D2D5DA',
        graphite: '#6C727F'
      },
      fontFamily: {
        vietnampro: '"Be Vietnam Pro"'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
