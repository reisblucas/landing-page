import { IconButton, Show } from '@chakra-ui/react'

import { useColorsThemeBased } from '@/helpers'
import { HamburgerIcon } from '@/ui/icons'

export function Hamburger() {
	const theming = useColorsThemeBased()

	return (
		<Show below="lg">
			<IconButton
				aria-label="Hamburger botão para abrir o menu de navegação"
				icon={<HamburgerIcon boxSize={6} stroke={theming.hamburgerIcon} />}
			/>
		</Show>
	)
}
