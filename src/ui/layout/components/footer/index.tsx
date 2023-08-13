import { Box, IconButton, Flex, HStack, Text, VStack, Link, Divider } from '@chakra-ui/react'

import { gpx, gpySection } from '@/ui/patterns'
import { useColorsThemeBased } from '@/helpers'
import { InstagramIcon, LinkedInIcon, TwitterIcon } from '@/ui/icons'

import { Logo } from '../header/Logo'

export function Footer() {
	const theming = useColorsThemeBased()

	return (
		<Box width="full" px={gpx} backgroundColor={theming.bgSection}>
			<VStack
				backgroundColor={theming.bgHero}
				borderTopRadius="3xl"
				maxW={{ md: '80vw' }}
				m="0 auto"
				px={16}
				py={gpySection}
				alignItems="stretch"
				gap={6}
			>
				<Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" gap={8}>
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
											aria-label="social link"
											colorScheme={social.colorScheme}
											borderRadius="full"
											variant="outline"
										/>
									))}
								</Flex>
							</Flex>
						</VStack>
					</VStack>

					<HStack gap={12} wrap="wrap" alignSelf="flex-start">
						<VStack alignItems="flex-start">
							<Text fontFamily="heading" fontWeight="bold">
								Lorem oferece
							</Text>
							<Link>
								<Text>Lorem</Text>
							</Link>
							<Link>
								<Text>Ipsum</Text>
							</Link>
							<Link>
								<Text>Dolor</Text>
							</Link>
							<Link>
								<Text>Sit</Text>
							</Link>
						</VStack>
						<VStack alignItems="flex-start">
							<Text fontFamily="heading" fontWeight="bold">
								Ferramentas
							</Text>
							<Link>
								<Text>Lorem</Text>
							</Link>
							<Link>
								<Text>Ipsum</Text>
							</Link>
							<Link>
								<Text>Dolor</Text>
							</Link>
							<Link>
								<Text>Sit</Text>
							</Link>
						</VStack>
						<VStack alignItems="flex-start">
							<Text fontFamily="heading" fontWeight="bold">
								Sobre nós
							</Text>
							<Link>
								<Text>Lorem</Text>
							</Link>
							<Link>
								<Text>Ipsum</Text>
							</Link>
							<Link>
								<Text>Dolor</Text>
							</Link>
							<Link>
								<Text>Sit</Text>
							</Link>
						</VStack>
					</HStack>
				</Flex>

				<Divider borderRadius="full" borderY="1px" borderColor={theming.bgSection} />

				<Flex flexDirection="column" gap={4} alignItems="center">
					<Flex gap={4} textDecoration="underline">
						<Link>
							<Text>Política de Privacidade</Text>
						</Link>
						<Link>
							<Text>Termos de Uso</Text>
						</Link>
					</Flex>

					<Text textAlign="center">&copy; Lorem - Todos os direitos reservados</Text>
				</Flex>
			</VStack>
		</Box>
	)
}

export namespace Footer {
	export const SocialLinks = [
		{ link: 'linkedin', icon: <LinkedInIcon />, colorScheme: 'grey' },
		{ link: 'instagram', icon: <InstagramIcon />, colorScheme: 'grey' },
		{ link: 'twitter', icon: <TwitterIcon />, colorScheme: 'grey' },
	]
}
