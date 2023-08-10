import { Box, IconButton, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { gpx, gpySection } from '@/ui/patterns'
import { useColorsThemeBased } from '@/helpers'
import { InstagramIcon, LinkedInIcon, TwitterIcon } from '@/ui/icons'

import { Logo } from '../header/Logo'

export function Footer() {
	const theming = useColorsThemeBased()

	return (
		<Box width="full" px={gpx} backgroundColor={theming.bgSection}>
			<Box backgroundColor={theming.bgHero} borderTopRadius="3xl">
				<HStack px={16} py={gpySection} justifyContent="space-between">
					<VStack alignItems="flex-start" gap={8}>
						<VStack gap={4} maxWidth="160px">
							<Flex flexDirection="column" gap={2}>
								<Logo />

								<Text>Some brand slogan</Text>
							</Flex>
						</VStack>

						<VStack>
							<Flex flexDirection="column" gap={2}>
								<Text fontWeight="bold">Social</Text>

								<Flex gap={4}>
									{Footer.SocialLinks.map((social) => (
										<IconButton
											icon={social.icon}
											key={social.link}
											aria-label="linkedin icon"
											colorScheme={social.colorScheme}
											borderRadius="full"
											variant="outline"
										/>
									))}
								</Flex>
							</Flex>
						</VStack>
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

export namespace Footer {
	export const SocialLinks = [
		{ link: 'linkedin', icon: <LinkedInIcon />, colorScheme: 'linkedin' },
		{ link: 'instagram', icon: <InstagramIcon />, colorScheme: 'pink' },
		{ link: 'twitter', icon: <TwitterIcon />, colorScheme: 'twitter' },
	]
}
