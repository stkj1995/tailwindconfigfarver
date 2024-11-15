/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      coral: {
        50: "#FFF1F0",
        100: "#FFE3E0",
        200: "#FFC7C2",
        300: "#FFA69E",
        400: "#FF8A80",
        500: "#FFA69E",
        600: "#FF8A80",
        700: "#FF2D1A",
        800: "#D11100",
        900: "#8F0C00",
      },
      blue: {
        50: "#F0F5F9",
        100: "#E2EBF3",
        200: "#C5D8E8",
        300: "#A7C4DC",
        400: "#8AB1D1",
        500: "#6D9DC5",
        600: "#4680AF",
        700: "#346083",
        800: "#234058",
        900: "#11202C",
      },
      green: {
        50: "#EDF7EE",
        100: "#DBF0DC",
        200: "#B8E0B9",
        300: "#94D196",
        400: "#6DC070",
        500: "#4CAF50",
        600: "#3C8B3F",
        700: "#2E6B30",
        800: "#1F4720",
        900: "#0F2410",
      },
      neutrals: {
        50: "#fff",
        100: "#DBDBDB",
        200: "#BABABA",
        300: "#969696",
        400: "#737373",
        500: "#505050",
        600: "#404040",
        700: "#303030",
        800: "#212121",
        900: "#000",
      },
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "112px",
      "6xl": "128px",
      "7xl": "112px",
      "8xl": "128px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      display: ["Courier", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativ: ["0.688rem", { lineHeight: "1.0rem" }],
      body: ["0.813rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      small: ["1.5rem", { lineHeight: "2.25rem" }],
      medium: ["2rem", { lineHeight: "3rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      xlarge: ["3rem", { lineHeight: "4.5rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
       fontWeight: {
         light: '300',
         regular: '400',
         semibold:'600',
       },

    /* Borders - borderstørrelser herunder */
     borderWidth: {
         DEFAULT: '1px',
         0: '0px',
         2: '2px',
     },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {
      /* Tilføj din egen farvepalette nedenfor */
      // colors: {
      //     transparent: 'transparent',
      //     current: 'currentColor',
      //     'farvenavn': {
      //         50: '#hexkode',
      //         100: '#hexkode',
      //         200: '#hexkode',
      //         300: '#hexkode',
      //         400: '#hexkode',
      //         500: '#hexkode',
      //         600: '#hexkode',
      //         700: '#hexkode',
      //         800: '#hexkode',
      //         900: '#hexkode',
      //     },
      //     'white': '#fff',
      //     'black': '#000',
      // },
      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },
      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },
      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
