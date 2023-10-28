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
          50: "#FFFFFF",
          100: "#000000"
        },
        gradient: {
          50: "",
          100: ""
        },
        border: {
          50: "#99DFFF"
        },
    },
    fontSize: {
      h1xl: "82.6px",
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
      '4xl': '0px 0px 50px #E0B3DA',
      '5xl': '0px 0px 9px #90C5D5',
      '6xl': '0px 0px 9px #FFFFFF'

    },
    backgroundImage: {
      'hero-main-prod': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/hero-main-desktop.png')",
      'ui-mobile-figma-prod': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/ui-mobile-figma.png')",
      'ui-mobile-react-prod': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/ui-mobile-react.png')",
      'ui-lg-react': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/react-moblie-lg.png')",
      'ui-lg-python': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/ui-lg-python.png')",
      'ui-lg-figma': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/ui-lg-figma.png')",
      'ui-lg-blender': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/ui-lg-blender.png')",
      'burger-logo-prod': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/burger-logo.png')",
      'navbar-logo-prod': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/navbar-logo.svg')",
      'demo-pic-1': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/demo-pic.jpg')",
      'demo-pic-2': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/demo-pic-2.jpg')",
      'down-arrow': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/down-arrow.png')",
      'down-arrow-black': "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/down-arrow-black.png",
      'code-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/code-icon.png')",
      'palette-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/palette-icon.png')",
      'lang-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/lang-icon.png')",
      'hero-bg-2': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/Hero-bg-2.png')",
      'contact-bg': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/contact-bg.png')",
      'copyright-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/copyright-icon.png')",
      'linkedin-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/LinkedIn-icon.png')",
      'twitter-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/Twitter-icon.png')",
      'instagram-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/Instagram-icon.png')",
      'github-icon': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/Github-icon.png')",
      'path-finding-visualizer-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/Path-finding-visualizer-pic.jpg')",
      'sorting-visualizer-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/sorting-visualizer-pic.jpg')",
      'wordvid-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/wordvid-pic.jpg')",
      'elondrifts-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/elondrifts-pic.jpeg')",
      'webportfolio-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/webportfolio-pic.png')",
      'webportfolioDesign-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/webportfolioDesign-pic.png')",
      'circuitverse-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/circuitverse-pic.png')",
      'the-bloom-times-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/TheBloomTimes-pic.png')",
      'blog-logo': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/blog-logo.png')",
      'icce-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/icce.jpeg')",
      'vressocasa-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/vressocasa.jpeg')",
      'premierarc-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/premier-arc.jpeg')",
      'stoneage-pic': "url('https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/stone-age.jpeg')"
    }
    },
  },
  plugins: [],
}

