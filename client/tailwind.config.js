/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#38726C',
          secondary: '#6B5B95',
          accent: '#88B04B',
          neutral: "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}

