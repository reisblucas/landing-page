import { Box, Link, List, ListItem } from '@chakra-ui/react'

export function Navlinks() {
	return (
		<List
			gap={4}
			display="flex"
			_hover={{
				a: {
					'text-decoration': 'none',
					opacity: 0.6,
				},
			}}
			m={0}
		>
			{Navlinks.links.map(({ href, title }) => (
				<ListItem
					key={href}
					lineHeight="30px"
					_hover={{
						transition: 'all 1s ease-in-out',
						a: {
							opacity: 1,
						},
						div: {
							opacity: 1,
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
