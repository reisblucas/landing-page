import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		heading: `'Cairo', sans-serif`,
		body: `'Cairo', sans-serif`,
	},
	colors: {
		'background-hero': '#FCF7F0',
	},
	config: {
		cssVarPrefix: 'landing-page',
	},
})
