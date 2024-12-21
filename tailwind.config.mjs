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
			  },
			  animation: {
				moveDown: 'moveDown .9s ease-in-out',
			  }
		},
	},
	plugins: [],
}
