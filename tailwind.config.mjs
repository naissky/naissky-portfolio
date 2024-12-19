/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dribble': '#efe6f7',
				'dribble-yellow': '#ffde65',
				'dribble-purple': '#d3eaff',
				'dribble-night': '#010'
			},
			fontFamily: {
				'unbounded': 'Unbounded Variable, arial'
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
