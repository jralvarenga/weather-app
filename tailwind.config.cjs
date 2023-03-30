/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        'poppins-bold': ['poppins-bold', 'sans-serif'],
        'poppins-black': ['poppins-black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

