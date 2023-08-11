import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { useColorsThemeBased } from '@/helpers'

import { Footer, Header } from './components'

export function Layout() {
	const theming = useColorsThemeBased()

	return (
		<Box id="banner" backgroundColor={theming.bgHero} width="full">
			<Header />
			<Outlet />
			<Footer />
		</Box>
	)
}
