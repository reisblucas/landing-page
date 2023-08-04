import { Box, Link, List, ListItem } from '@chakra-ui/react'

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
							transition: 'all 0.8s ease-in-out',
						},
						div: {
							opacity: 1,
							transition: 'all 0.8s ease-in-out',
						},
					}}
				>
					<Link href={href} px={2} opacity={0.6}>
						{title}
					</Link>
					<Box height={0.5} backgroundColor="green.500" opacity={0} />
				</ListItem>
			))}
		</List>
	)
}

export namespace Navlinks {
	export const links = [
		{ href: '#begin', title: 'Início' },
		{ href: '#plataform', title: 'Plataforma' },
		{ href: '#business', title: 'A empresa' },
		{ href: '#testimony', title: 'Depoimentos' },
		{ href: '#questions', title: 'Perguntas frequentes' },
		{ href: '#start', title: 'Começar' },
	]
}
