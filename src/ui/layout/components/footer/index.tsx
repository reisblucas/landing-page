import { gpx, gpySection } from '@/ui/patterns'
import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import { Logo } from '../header/Logo'
import { useColorsThemeBased } from '@/helpers'

export function Footer() {
	const theming = useColorsThemeBased()

	return (
		<Box width="full" px={gpx} backgroundColor={theming.bgSection}>
			<Box backgroundColor={theming.bgHero} borderTopRadius="3xl">
				<HStack px={16} py={gpySection} justifyContent="space-between">
					<VStack>
						<Flex>
							<Flex>
								<Logo />
							</Flex>
						</Flex>

						<Flex></Flex>
					</VStack>
					<HStack>
						<VStack></VStack>
						<VStack></VStack>
						<VStack></VStack>
					</HStack>
				</HStack>
			</Box>
		</Box>
	)
}
