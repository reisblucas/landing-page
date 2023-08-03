import { Box } from '@chakra-ui/react'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<Box>
			<Header />
			<Outlet />
		</Box>
	)
}
