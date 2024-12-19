/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/_app.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#00040f",
        primaryBlue: "#0E6DBA",
        secondaryBlue: "#084170",
        secondaryYellow: "#E0D538",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightBlue: "rgb(180, 209, 247)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        EncodeSans: ["Encode Sans", "sans-serif"],
      },
      animation: {
        pulseBorder: "pulse-border .8s infinite",
      },
      keyframes: {
        "pulse-border": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(255, 255, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" },
        },
      }
    },
    // screens: {
    //   'xl': {'max': '1200px'},
    //   'lg': {'max': '991px'},
    //   'md': {'max': '767px'},
    //   'sm': {'max': '550px'},
    //   'xsm': {'max': '375px'},
    //   'xxs': {'max': '290px'},
    // },
    screens: {
      xxs: "350px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

