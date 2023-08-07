import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Header } from './components'

export function Layout() {
	return (
		<Box backgroundColor="background-hero" width="full">
			<Header />
			<Outlet />

			{/* footer */}
			<Box>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, mollitia unde facilis quo, sed nam odit
				obcaecati soluta, quas quae saepe in illum minima repellendus. Voluptatibus porro ab iste eaque!
			</Box>
		</Box>
	)
}
