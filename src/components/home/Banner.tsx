import { Flex, Show, Img, Heading, Text, keyframes } from '@chakra-ui/react'
import { FaArrowDown } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import Typewriter from 'typewriter-effect'

import { useColorsThemeBased } from '@/helpers'
import { ButtonHero, SectionSplit } from '@/ui'

export function Banner() {
	const businessName = 'Lorem'
	const theming = useColorsThemeBased()

	const animationKeyframes = keyframes`
  50%  { transform: translateY(-3px); }
`
	const animation = `${animationKeyframes} 1s ease-in-out infinite`

	return (
		<SectionSplit
			hasPaddingXOnLeft
			ctaButton={
				<HashLink smooth to="#pain">
					<ButtonHero description="Saiba mais" icon={FaArrowDown} stroke="black" animation={animation} />
				</HashLink>
			}
			leftSection={
				<Flex flexDirection="column" height={{ lg: '80vh' }} justifyContent="center" bg={theming.bgHero}>
					<Show below="lg">
						<Flex w="full" py={2} justifyContent="center" alignItems="center">
							<Img src="images/landing/lorem-logo.png" maxW="80%" maxH="80%" />
						</Flex>
					</Show>

					<Heading as="h1" size="4xl" fontWeight="light" pb={{ base: 4, md: 4 }}>
						<Typewriter
							onInit={(typewriter) =>
								typewriter
									.typeString(
										`Finanças?
										<br />
										Burocracia?
										<br />
										A ${businessName} cuida para você!`,
									)
									.callFunction(() => 'start typing')

									.start()
									.callFunction((thisArg) => thisArg.elements.cursor.remove())
							}
							options={{
								autoStart: true,
								delay: 50,
							}}
						/>
					</Heading>

					<Text fontSize={{ base: 'sm', md: 'md' }}>
						{businessName} simplifica a vida dos médicos. Gerenciamento, rastreamento e pagamento - tudo em um só lugar.
					</Text>

					{/* user pictures */}
					<Flex height={12} my={4} alignItems="center" gap={4}>
						<Flex position="relative" width="130px" height="full">
							{Banner.ProfileImgPaths.map((path, i) => (
								<Img
									key={path}
									boxSize={12}
									borderRadius="full"
									src={path}
									border="2px"
									borderColor="background-hero"
									backgroundColor="grey"
									zIndex={i}
									position="absolute"
									left={`${i * 28}px`}
									top={0}
								/>
							))}
						</Flex>

						<Text borderBottom="1px" borderColor="blackAlpha.500">
							+ 1000 médicos
						</Text>
					</Flex>
				</Flex>
			}
			rightSection={
				<Show above="lg">
					<Flex flexDirection="column" h={{ base: '768px', lg: 'full' }} borderTopRadius={32} justifyContent="center">
						<Img src="images/landing/lorem-logo.png" maxW="50%" maxH="50%" m="0 auto" />
					</Flex>
				</Show>
			}
		/>
	)
}

export namespace Banner {
	export const ProfileImgPaths = [
		// could get based on our the first users
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
	]
}
