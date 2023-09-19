/** @type {import('tailwindcss').Config} */


const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
      "./index.html",
      "./src/*.{vue, js, jsx, ts, tsx}",
      "./src/**/*.{vue, js, jsx, ts, tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/tailwindcss-animatecss/**/*.js",
      './src/tailwind-theme.js',
      
      
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require ('flowbite'),
    require ('daisyui'),
    require ('tailwindcss-animatecss'),
    [FormKitVariants],
  ],
}