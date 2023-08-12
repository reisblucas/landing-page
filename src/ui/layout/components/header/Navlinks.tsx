import { Box, List, ListItem, ListProps } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

import { ButtonHero } from '../general'
import { useScrollYPosition } from '@/helpers'

export function Navlinks({ drawerHashLinkSupport, ...listProps }: Navlinks.Props) {
	const [scrollYPosition] = useScrollYPosition()

	return (
		<List gap={4} display="flex" m={0} alignItems="center" {...listProps}>
			{Navlinks.links.map(({ href, title, between: [start, end] }) => {
				const style = {
					a: {
						opacity: 1,
						textDecoration: 'none',
						transition: 'all 0.5s ease-in-out',
					},
					div: {
						opacity: 1,
						transition: 'all 0.5s ease-in-out',
					},
				}

				const sx = scrollYPosition >= start && scrollYPosition < end ? style : undefined

				return (
					<ListItem key={href} lineHeight="30px" _hover={style} sx={sx}>
						<HashLink smooth to={href} onClick={drawerHashLinkSupport}>
							<Box px={2} opacity={0.6}>
								{title}
							</Box>
						</HashLink>
						<Box height={0.5} backgroundColor="green.500" opacity={0} />
					</ListItem>
				)
			})}

			<HashLink smooth to="#start" onClick={drawerHashLinkSupport}>
				<ButtonHero description="Começar" variant="solid" />
			</HashLink>
		</List>
	)
}

export namespace Navlinks {
	export interface Props extends ListProps {
		drawerHashLinkSupport?: () => void
	}

	export const links = [
		{ href: '#banner', title: 'Início', between: [0, 1052] }, // 0 - 1052
		{ href: '#pain', title: 'Atuação', between: [1052, 1624] }, // 1052 - 1624
		{ href: '#socialProof', title: 'Como Te Ajudamos', between: [1624, 3162] }, // 1624 - 3162
		{ href: '#how', title: 'Como Cadastrar', between: [3162, 4331] }, // 3162 - 4331
		{ href: '#questions', title: 'Perguntas Frequentes', between: [4331, Infinity] }, // 4331
	]
}
