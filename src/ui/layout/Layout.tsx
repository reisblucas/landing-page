import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from './components'

export function Layout() {
	return (
		<Box backgroundColor="background-hero" width="full">
			<Header />
			<Outlet />
			<Footer />
		</Box>
	)
}
