import { Box, Button, Flex, Heading, Icon, Image, Img, Show, Text } from '@chakra-ui/react'

import { DoctorGradient, Section } from '@/ui'
import { ArrowRightIcon } from '@/ui/icons'

export function Home() {
	const businessName = 'Lorem'

	return (
		<Section
			left={
				<>
					<Show below="md">
						<Flex w="full" py={2} justifyContent="center" alignItems="center">
							<Img src="images/landing/lorem-logo.png" maxW="80%" maxH="80%" />
						</Flex>
					</Show>

					<Heading as="h1" size="4xl" fontWeight="light" pb={{ base: 4, md: 0 }}>
						Finanças?
						<br />
						Burocracia?
						<br />A {businessName} cuida para você!
					</Heading>

					<Flex justifyContent="center" py={6}>
						<Button gap={4} alignItems="center" width="fit-content" p={4} borderRadius="full" colorScheme="green">
							<Text color="background-hero">Começar agora</Text>
							<Icon as={ArrowRightIcon} stroke="background-hero" />
						</Button>
					</Flex>

					<Text>
						{businessName} simplifica a vida dos médicos. Gerenciamento, rastreamento e pagamento - tudo em um só lugar.
					</Text>

					{/* user pictures */}
					<Flex height={10} my={4} alignItems="center">
						<Flex position="relative" width="130px" height="full">
							{Home.ProfileImgPaths.map((path, i) => (
								<Img
									key={path}
									boxSize="40px"
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
							+ 100 usuários
						</Text>
					</Flex>

					<Show above="md">
						<DoctorGradient />
					</Show>
				</>
			}
			right={
				<Flex backgroundColor="#fbf3e8" flexDirection="column" h={{ base: '768px', lg: 'full' }} borderTopRadius={32}>
					<Show above="md">
						<Img src="images/landing/lorem-logo.png" maxW="50%" maxH="50%" m="0 auto" />
					</Show>

					<Show below="md">
						<DoctorGradient />
					</Show>

					<Flex flexGrow={1} flexDirection="row" justifyContent="center" gap={{ base: 6, md: 10 }} py={4}>
						<Flex position="relative">
							<Box
								width={20}
								height="80%"
								backgroundColor={Home.GraphColorPattern.first}
								alignSelf="flex-end"
								borderTopRadius={20}
							/>
							<Image
								src="images/landing/red-arrow.png"
								boxSize={20}
								position="absolute"
								transform="scaleY(-1) rotate(-15deg)"
								top={5}
								right={-8}
								zIndex={1}
							/>
						</Flex>
						<Flex position="relative">
							<Box
								width={36}
								height={16}
								border="1px"
								borderColor="#ffd6d4"
								position="absolute"
								borderRadius={16}
								padding={2}
								textAlign="center"
								top={5}
								bgGradient={`repeating-linear-gradient(
									-45deg,
									#ffd6d4,
									#ffd6d4 2px,
									transparent 2px,
									transparent 5px 
								)`}
							>
								<Text>Total</Text>
								<Text fontFamily="Baskerville" fontSize="xl" fontWeight="bold">
									<Text as="span" fontSize="xs">
										R$
									</Text>
									25.358,00
								</Text>
							</Box>

							<Flex position="relative">
								<Box
									width={20}
									height="50%"
									backgroundColor={Home.GraphColorPattern.second}
									alignSelf="flex-end"
									borderTopRadius={20}
									position="relative"
								/>

								<Image
									src="images/landing/green-arrow.png"
									boxSize={32}
									position="absolute"
									transform="scaleY(-1) rotate(0deg)"
									top={28}
									right={-10}
									zIndex={1}
								/>
							</Flex>
						</Flex>
						<Flex position="relative" alignContent="space-between" w="30%">
							<Box
								width={36}
								height={16}
								border="1px"
								borderColor="#b5eac3"
								position="absolute"
								borderRadius={16}
								padding={2}
								textAlign="center"
								top={32}
								bgGradient={`repeating-linear-gradient(
									45deg,
									#b5eac3,
									#b5eac3 2px,
									transparent 2px,
									transparent 5px
								)`}
							>
								<Text>Total</Text>
								<Text fontFamily="Baskerville" fontSize="xl" fontWeight="bold">
									<Text as="span" fontSize="xs">
										R$
									</Text>
									21.022,20
								</Text>
							</Box>

							<Flex width="full" justifyContent="center" position="absolute" bottom={4}>
								<Text fontFamily="Baskerville" fontWeight="bold" fontSize={28} textAlign="center">
									Some phrase
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			}
		/>
	)
}

export namespace Home {
	export const ProfileImgPaths = [
		// could get from api based on our the first users
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
	]

	export const GraphColorPattern = {
		first: 'red.500',
		second: 'green.400',
	}
}
