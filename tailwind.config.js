/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              mainFont: ['Montserrat', 'sans-serif'], 
              secondaryFont: ['Open Sans', 'sans-serif'], 
          },
          colors: {
            primaryColor: "#56823B",
            primaryColorLight: "#9FD086",
            secondaryColor: "#673B82",

          },
          textColor: {
            DEFAULT: '#000000', 
          },
      },
  },
  plugins: [],
};
