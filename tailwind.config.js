/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightblue: '#0DBBFC',
        green: '#65E4A3',
        lightgrey: '#F1F1F1',
        darkblue: '#0A2640',
        greyblue: '#8FB6D5',
        grey: '#777777',
      },
    },
  },
  plugins: [require("daisyui")],
}
