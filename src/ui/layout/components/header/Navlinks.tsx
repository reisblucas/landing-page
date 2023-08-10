import { Box, List, ListItem } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

import { ButtonHero } from '../general'

export function Navlinks() {
	return (
		<List gap={4} display={{ base: 'none', lg: 'flex' }} m={0}>
			{Navlinks.links.map(({ href, title }) => (
				<ListItem
					key={href}
					lineHeight="30px"
					_hover={{
						a: {
							opacity: 1,
							textDecoration: 'none',
							transition: 'all 0.5s ease-in-out',
						},
						div: {
							opacity: 1,
							transition: 'all 0.5s ease-in-out',
						},
					}}
				>
					<HashLink smooth to={href}>
						<Box px={2} opacity={0.6}>
							{title}
						</Box>
					</HashLink>
					<Box height={0.5} backgroundColor="green.500" opacity={0} />
				</ListItem>
			))}

			<HashLink smooth to="#start">
				<ButtonHero description="Começar" variant="solid" />
			</HashLink>
		</List>
	)
}

export namespace Navlinks {
	export const links = [
		{ href: '#', title: 'Início' },
		{ href: '#pain', title: 'Atuação' },
		{ href: '#socialProof', title: 'Como Te Ajudamos' },
		{ href: '#how', title: 'Como Cadastrar' },
		{ href: '#questions', title: 'Perguntas Frequentes' },
	]
}
