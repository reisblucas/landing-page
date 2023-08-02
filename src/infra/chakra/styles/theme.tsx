import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		heading: `'Cairo', sans-serif`,
		body: `'Cairo', sans-serif`,
	},
	config: {
		cssVarPrefix: 'landing-page',
	},
})
