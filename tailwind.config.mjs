
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' for media-query based dark mode
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        rubik:["Rubik", "serif"],
        inter: ["Inter", "serif"],
        interTight: ["InterTight", "serif"],
        caveat: ["Caveat", "serif"],
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
        fadeIn:{
          from:{
            opacity:"0",
          },
          to:{
            opacity:"1"
          },
        },
        tilt:{
          "0% , 50% , 100%":{
            transform:"rotate(0deg)"
          },
          "25%":{
            transform:"rotate(1deg)"
          },
          "75%":{
            transform:"rotate(-1deg)"
          }
        },
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
            transform: "translateX(10%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        moveFromLeft: {
          from: {
            transform: "translateX(-10%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        translateDiagonal:{
          from:{
            transform:" translate(0, 0) scale(0)"
          },
          to:{
            transform:" translate(10%, -10%) scale(1.5)"
          }
        },
        scrollHorizontal: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        borderImg:{
          "0%, 100%":{
            borderRadius:"31% 69% 70% 30% / 60% 49% 51% 40% ",
          },
          "20%":{
            borderRadius:"60% 40% 70% 30% / 41% 55% 45% 59%  ",
          },
          "40%":{
            borderRadius:"30% 70% 60% 40% / 50% 60% 40% 50%",
          },
          "60%":{
            borderRadius:"70% 30% 40% 60% / 50% 40% 60% 50%",
          },
          "80%":{
            borderRadius:"40% 60% 30% 70% / 50% 40% 60% 50%",
          }
        },
        smoothAnimation: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "50%": { opacity: "0.5", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(10px)" },
        }
      },
      fontSize: {
        responsive: "clamp(0.75rem, 2.5vw, 2.75rem)",
      },
      animation: {
        moveDown: "moveDown .5s ease-in-out",
        moveUp: "moveUp .9s ease-in-out",
        spinSlow: "spinSlow 18s linear infinite",
        fly: "fly 2s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        moveFromRight: "moveFromRight 1s ease-in-out",
        moveFromLeft: "moveFromLeft 1s ease-in-out",
        technologyIcons: "technologyIcons 5s linear infinite",
        fadeIn: "fadeIn 2s ease-in-out ",
        translateDiagonal: "translateDiagonal 1s linear ease-in-out",
        scrollHorizontal:  "scrollHorizontal 10s linear infinite",
        tilt: "tilt 7s linear infinite",
        borderImg: "borderImg 20s linear infinite",
        smoothAnimation: "smoothAnimation 3s ease-in-out infinite",
      },
      dropShadow: {
        'top': '0 75px 35px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {  
        'custom': '5px 4px 6px 2px rgba(0, 0, 0, 0.8), -1.5px -2px 4px 2px rgba(255, 255, 255, 0.5)',  
      }  
    },
    plugins: [],
  },
};
