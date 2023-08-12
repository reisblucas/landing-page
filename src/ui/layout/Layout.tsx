import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { useColorsThemeBased } from '@/helpers'

import { Footer, Header } from './components'

export function Layout() {
	const theming = useColorsThemeBased()

	useEffect(() => {
		if (window.location.hash) {
			const targetElement = document.querySelector(window.location.hash)
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<Box id="banner" backgroundColor={theming.bgHero} width="full">
			<Header />
			<Outlet />
			<Footer />
		</Box>
	)
}
