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
        mainColorDark1: '#166646',
        secondaryColor:'#F8C718',
       
      },
      margin:{
         sectionMarginTop:"50px"
      },
   
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* For Chrome, Safari and Opera */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }
  ],
}

