/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '410px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#040D12',
      'navy': '#183D3D',
      'teal': '#64ccc5',
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
        'my-background': "url('./src/assets/bg1.jpg')",
      },
  },
  plugins:[],
}
}