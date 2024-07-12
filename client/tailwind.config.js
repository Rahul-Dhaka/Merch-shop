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
          primary: '#3A405A',
          secondary: '#6B5B95',
          accent: '#1E293B',
          neutral: "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}

