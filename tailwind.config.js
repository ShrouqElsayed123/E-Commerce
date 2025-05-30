/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // مهم جدًا عشان Tailwind يشتغل على ملفات React

  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#4A7EA0',
      }
    },
  },
  plugins: [],
}

