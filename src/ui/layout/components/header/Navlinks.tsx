import { List, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export function Navlinks() {
	return (
		<List>
			<NavLink to="#plataforma">
				<ListItem>Plataforma</ListItem>
			</NavLink>
		</List>
	)
}
