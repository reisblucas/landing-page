import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	Show,
	useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'

import { drawerHashLinkSupport, useColorsThemeBased } from '@/helpers'
import { HamburgerIcon } from '@/ui/icons'

import { Navlinks } from './Navlinks'

export function Hamburger() {
	const theming = useColorsThemeBased()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const drawerContentRef = useRef(null)

	return (
		<Show below="lg">
			<IconButton
				aria-label="Hamburger botão para abrir o menu de navegação"
				icon={<HamburgerIcon boxSize={6} stroke={theming.hamburgerIcon} />}
				onClick={onOpen}
				variant="ghost"
			/>

			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />

				<DrawerContent ref={drawerContentRef}>
					<DrawerCloseButton />
					<DrawerBody py={12}>
						<Navlinks gap={8} flexDirection="column" drawerHashLinkSupport={() => drawerHashLinkSupport({ onClose })} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Show>
	)
}
