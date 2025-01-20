import Technology from "./src/components/Technology.astro";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' for media-query based dark mode
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } este disp es un smartphone

      'md': '768px',
      // => @media (min-width: 768px) { ... } este disp es una tablet

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } este disp es una laptop

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } este disp es una laptop grande

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... } este dispositivo es una laptop muy grande
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        rubik:["Rubik Vinyl", "serif"],
        inter: ["Inter", "serif"],
        interTight: ["Inter Tight", "serif"]
      },
      transitionDelay: {
        1000: "1000ms",
        "3000ms": "3000ms",
        "5000ms": "5000ms",
      },
      backgroundImage: {
        customBackground: "url('/src/assets/radiant-gradient-bg.svg')",
      },
      keyframes: {
        moveDown: {
          from: {
            transform: "translate3d(0, -15%, 0)",
            opacity: "0",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: "0.25",
          },
        },
        moveUp: {
          from: {
            transform: "translate3d(0, 0, 0)",
            opacity: "0",
          },
          to: {
            transform: "translate3d(0, -15%, 0)",
            opacity: "0.25",
          },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fly: {
          from: {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
          to: {
            transform: "translate3d(0, -80%, 0)",
            opacity: "0",
          },
        },
        pulseSlow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".15",
          },
        },
        technologyIcons: {
          "0%,100%": {
            opacity: "0.75",
          },
          "50%": {
            opacity: "0.05",
          },
        },
        moveFromRight: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        moveFromLeft: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      fontSize: {
        responsive: "clamp(0.75rem, 2.5vw, 2.75rem)",
      },
      animation: {
        moveDown: "moveDown .9s ease-in-out",
        moveUp: "moveUp .9s ease-in-out",
        spinSlow: "spinSlow 18s linear infinite",
        fly: "fly 2s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        moveFromRight: "moveFromRight 1s ease-in-out",
        moveFromLeft: "moveFromLeft 1s ease-in-out",
        technologyIcons: "technologyIcons 5s linear infinite",
      },
    },
    plugins: [],
  },
};
