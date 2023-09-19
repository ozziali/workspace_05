/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/*.{vue, js, jsx, ts, tsx}",
      "./src/**/*.{vue, js, jsx, ts, tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/tailwindcss-animatecss/**/*.js",
      
      
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require ('flowbite'),
    require ('daisyui'),
    require ('tailwindcss-animatecss'),
  ],
}