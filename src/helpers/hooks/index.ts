import { useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export function useColorsThemeBased() {
	const { colorMode: cm } = useColorMode()
	const condition = cm === 'light'

	return {
		bgHero: condition ? 'background-hero' : 'blue.700',
		bgSection: condition ? '#fcf1e0' : 'blue.900',
		shadowHeader: condition
			? 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;'
			: 'rgba(206, 220, 223, 0.25) 0px 4px 8px -2px, rgba(206, 220, 223, 0.25) 0px 0px 0px 1px;',
		hamburgerIcon: condition ? 'blackAlpha.800' : 'white',
	}
}

export function useScrollYPosition() {
	const [scroll, setScroll] = useState(window.scrollY || 0)

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [scroll])

	return [scroll] as const
}
