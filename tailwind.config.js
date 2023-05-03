/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#4D4D4D',
          400: '#020202',
        },
        secondary: {
          50: '#FAFCFE',
          100: '#F5FBFF',
          200: '#F6FBFF',
          300: '#F2F7FB',
          400: '#DDE2E5',
        },
        accent: {
          blue: {
            50: "#CCEFFF",
            100: "#99DFFF",
            200: "#66CFFF",
            300: "#35BFFF",
            400: "#0477E1"
          },
          pink: {
            50: "#E0D5DE",
            100: "#E0CADD",
            200: "#E0B3DA",
            300: "#E09AD6",
            400: "#E05ACD"
          },
          cali: {
            50: "#EFE8E3",
            100: "#EFE2D7",
            200: "#EFD9C6",
            300: "#EFCCAF",
            400: "#EFAE78"
          },
          purple: {
            50: "#C0B7D7",
            100: "#AA96D7",
            200: "#8461D7",
            300: "#693BD7",
            400: "#3F00D7"
          },
        },
        shades: {
          50: "FFFFFF",
          100: "000000"
        },
        gradient: {
          50: "",
          100: ""
        }
    },
    fontSize: {
      h1: "68.8px",
      h2: "47.8px",
      h3: "39.8px",
      h4: "33.2px",
      h5: "27.6px",
      h6: "19.2px",
      p1: "19.2px",
      p2: "16px",
      p3: "13.3px"
    },
    fontFamily: {
      atkinson: ['Atkinson Hyperlegible', 'sans-serif']
    },
    dropShadow: {
      'xl': '0px 0px 16px #BCCFD9',
      '2xl': '0px 0px 16px #BFD2E1',
      '3xl': '0px 0px 16px #66CFFF',

    },
    backgroundImage: {
      'hero-main-dev': "url('public/assets/hero-main.png')",
      'hero-main-prod': "url('https://abedelrazzak.github.io/webportfolio/assets/hero-main.png')",
      'ui-mobile-figma-dev': "url('public/assets/ui-mobile-figma.png')",
      'ui-mobile-figma-prod': "url('https://abedelrazzak.github.io/webportfolio/assets/ui-mobile-figma.png')",
      'ui-mobile-react-dev': "url('assets/ui-mobile-react.png')",
      'ui-mobile-react-prod': "url('https://abedelrazzak.github.io/webportfolio/assets/ui-mobile-react.png')",
    }
    },
  },
  plugins: [],
}

