import { createIcon } from '@chakra-ui/react'

export const HamburgerIcon = createIcon({
	displayName: 'HamburgerIcon',
	viewBox: '0 0 24 24',
	defaultProps: {
		stroke: '#1C274C',
	},
	path: (
		<>
			<path d="M20 7L4 7" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M20 12L4 12" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M20 17L4 17" strokeWidth="1.5" strokeLinecap="round" />
		</>
	),
})
