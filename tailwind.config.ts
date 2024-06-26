import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        'x-25': '100px', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-background": "url('/path/to/your/image.jpg')", 
      },
      fontFamily: {
        'myfont': ['var(--myfont)'],
      },
      colors: {
        'light-green-gray': '#C1DCDC',
        'text-gray': 'rgba(30, 30, 30, 0.5)', 
      },
      height: {
        128: '512px',
        'my-height':'436px',
        "about":'96px',
        256:'1024px',
        210.25:'841px'
      },
      width: {
        '70%': '70%',
        'card-width':"300px",
        'mywidth':"200px",
        "about":'96px'
      },
      fontSize: {
        '6.5xl': '64px',
        '3.5xl': '32px'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      screens:{
        xs:'431px'
      }
    },
  },
  plugins: [],
};

export default config;
