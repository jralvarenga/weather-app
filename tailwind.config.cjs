/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['poppins', 'sans-serif'],
        'main-bold': ['poppins-bold', 'sans-serif'],
        'main-black': ['poppins-black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

