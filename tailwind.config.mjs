/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			fontFamily: {
				jost: ['Jost', 'sans-serif'],
		  },
			transitionDelay: {
				'1000': '1000ms', '3000ms': '3000ms', '5000ms': '5000ms'
			  },
			backgroundImage: {
				'customBackground': "url('/src/assets/radiant-gradient-bg.svg')",
			  },
			keyframes: {
				moveDown: {
				  from: {
					transform: 'translate3d(0, -100%, 0)',
					opacity: '0',
				  },
				  to: {
					transform: 'translate3d(0, 0, 0)',
					opacity: '1',
				  },
				},
				spinSlow: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				fly:{
					from: {
						transform: 'translate3d(0, 0, 0)',
						opacity: '1',
					  },
					  to: {
						transform: 'translate3d(0, -80%, 0)',
						opacity: '0',
					  },
				},
				pulseSlow:{
					'0%, 100%': {
						opacity: '1'
					  },
					  '50%': {
						opacity: '.5'
					  },
				},
				moveFromRight:{
					from: {
						transform: 'translateX(100%)',
						opacity: '0',
					  },
					  to: {
						transform: 'translateX(0)',
						opacity: '1',
					  },
				},
				moveFromLeft:{
					from: {
						transform: 'translateX(-100%)',
						opacity: '0',
					  },
					  to: {
						transform: 'translateX(0)',
						opacity: '1',
					  },
				}
			  },
			  fontSize: {
				responsive: 'clamp(0.75rem, 2.5vw, 2.75rem)',
			  },
			  animation: {
				moveDown: 'moveDown .9s ease-in-out',
				spinSlow: 'spinSlow 18s linear infinite',
				fly: 'fly 2s linear infinite',				
				pulseSlow: 'pulseSlow 4s ease-in-out infinite',
				moveFromRight: 'moveFromRight 1s ease-in-out',
				moveFromLeft: 'moveFromLeft 1s ease-in-out',
		},
	},
	plugins: [],
}}
