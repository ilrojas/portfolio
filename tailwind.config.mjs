/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
				}
			  },
			  animation: {
				moveDown: 'moveDown .9s ease-in-out',
				spinSlow: 'spinSlow 18s linear infinite',
				fly: 'fly 2s linear infinite'
			  }
		},
	},
	plugins: [],
}
