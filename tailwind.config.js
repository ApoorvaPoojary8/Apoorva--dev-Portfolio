/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#30635e",
        "primary-container": "#4a7c77",
        "primary-fixed": "#b8ede6",
        "primary-fixed-dim": "#9dd0ca",

        surface: "#fcf9f8",
        "surface-variant": "#e5e2e1",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-high": "#eae7e7",
        "surface-container-lowest": "#ffffff",

        "on-surface": "#1c1b1b",
        "on-surface-variant": "#404847",

        secondary: "#625e54",
        "secondary-container": "#e9e2d4",

        tertiary: "#515d5b",
        "tertiary-container": "#697673",

        outline: "#707977",
        "outline-variant": "#bfc8c6",

        "on-primary": "#ffffff",
        "on-primary-container": "#eafffb",
        "on-secondary-container": "#696459",
        "on-tertiary-container": "#f0fdfa",
      },

      spacing: {
        "margin-mobile": "20px",
        "margin-tablet": "32px",
        "margin-desktop": "64px",
        "container-max": "1280px",
        "section-gap": "120px",
      },

      maxWidth: {
        "container-max": "1280px",
      },

      fontFamily: {
        display: ["Playfair Display", "serif"],
        headline: ["Playfair Display", "serif"],
        body: ["Geist", "sans-serif"],
        "accent-script": ["Playfair Display", "serif"],
        "label-caps": ["Geist", "sans-serif"],
      },

      fontSize: {
        display: [
          "80px",
          {
            lineHeight: "96px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],

        "headline-md": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],

        "body-lg": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],

        "label-caps": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.1em",
            fontWeight: "600",
          },
        ],
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },

  plugins: [],
};