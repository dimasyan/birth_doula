/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        ricordi: ['Ricordi', 'sans-serif'],
        drugsThin: ['DrugsThin', 'sans-serif'],
        agrandir: ['Agrandir', 'sans-serif']
      },
      colors: {
        'custom-bg': '#ebebeb',
        'text-bg': '#e5ded8',
        'text-primary': '#6b5e54'
      },
      width: {
        '155': '310px',
      },
      height: {
        '182': '365px',
      },
      fontSize: {
        base: '18px',
        m: '17px',
        sm: '16px',
        xs: '15px'
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '600px',
          lg: '720px',
          xl: '960px',
          '2xl': '1140px',
        },
      },
    },
  },
  plugins: [],
}

