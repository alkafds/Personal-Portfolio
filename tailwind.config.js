/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#333333',
      'navy': '#706C61',
      'teal': '#E1F4F3',
      'mint': '#93B1A6',
      'white': '#ffffff',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4x1': '2rem',
      },
      backgroundImage: {
        'my-background': "url('https://s5.gifyu.com/images/SR7Zx.gif')",
      },
  },
  plugins:[],
}
}
