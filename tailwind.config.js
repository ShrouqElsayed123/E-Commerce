/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // مهم جدًا عشان Tailwind يشتغل على ملفات React

  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#1C8057',
        mainColorLight1: '#37916C',
        secondaryColor:'#F8C718',
       
      },
      margin:{
         sectionMarginTop:"50px"
      }
    },
  },
  plugins: [],
}

