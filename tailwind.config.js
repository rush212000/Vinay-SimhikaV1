module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['"shelby"', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        grey: '#484B4B',
        accent: '#E0E0E0',
      },
      backgroundColor: {
        main: '#E0E0E0', // Replace this with the desired background color
      },
    },
  },
  plugins: [],
};
