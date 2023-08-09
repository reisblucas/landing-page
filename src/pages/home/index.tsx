import { Box, Button, Center, Divider, Flex, Heading, Icon, Img, Show, Text } from '@chakra-ui/react'
import { FaArrowDown } from 'react-icons/fa'
import { Fragment } from 'react'

import { Section, SectionSplit } from '@/ui'

export function Home() {
	const businessName = 'Lorem'

	return (
		<Fragment>
			<SectionSplit
				hasPaddingXOnLeft
				left={
					<Flex flexDirection="column" height={{ base: '100vh', lg: '80vh' }} justifyContent="center">
						<Show below="md">
							<Flex w="full" py={2} justifyContent="center" alignItems="center">
								<Img src="images/landing/lorem-logo.png" maxW="80%" maxH="80%" />
							</Flex>
						</Show>

						<Heading as="h1" size="4xl" fontWeight="light" pb={{ base: 4, md: 4 }}>
							Finanças?
							<br />
							Burocracia?
							<br />A {businessName} cuida para você!
						</Heading>

						<Text fontSize={{ base: 'sm', md: 'md' }}>
							{businessName} simplifica a vida dos médicos. Gerenciamento, rastreamento e pagamento - tudo em um só
							lugar.
						</Text>

						{/* user pictures */}
						<Flex height={12} my={4} alignItems="center" gap={4}>
							<Flex position="relative" width="130px" height="full">
								{Home.ProfileImgPaths.map((path, i) => (
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

						<Flex justifyContent="center" py={4}>
							<Button
								gap={4}
								alignItems="center"
								width="fit-content"
								p="8px 32px"
								borderRadius="full"
								colorScheme="green"
								color="background-hero"
							>
								Saiba mais
								<Icon as={FaArrowDown} stroke="background-hero" />
							</Button>
						</Flex>
					</Flex>
				}
				right={
					<Show above="lg">
						<Flex flexDirection="column" h={{ base: '768px', lg: 'full' }} borderTopRadius={32} justifyContent="center">
							<Img src="images/landing/lorem-logo.png" maxW="50%" maxH="50%" m="0 auto" />
						</Flex>
					</Show>
				}
			/>

			{/* Pain section */}
			<Section backgroundColor="#fcf1e0" gap={8} borderTopRadius={20}>
				<Heading
					as="h2"
					fontSize={{ base: '5xl', md: '6xl' }}
					fontFamily="heading"
					fontWeight="light"
					textAlign="center"
				>
					Some Pain Heading
				</Heading>

				<Flex
					flexDirection={{ base: 'column', md: 'row' }}
					width="full"
					gap={12}
					py={4}
					justifyContent="center"
					alignItems="center"
					wrap="wrap"
				>
					{Home.Pains.map((pain) => (
						<Flex
							key={pain.title}
							flexDirection="column"
							gap={4}
							width="200px"
							minHeight="150px"
							border="1px solid rgba(56, 161, 105, 0.5)"
							borderRadius={16}
							justifyContent="center"
							alignItems="center"
							p={4}
							backgroundColor="background-hero"
							_hover={{
								boxShadow:
									'rgba(56, 161, 105, 0.4) -5px 5px, rgba(56, 161, 105, 0.3) -10px 10px, rgba(56, 161, 105, 0.2) -15px 15px, rgba(56, 161, 105, 0.1) -20px 20px, rgba(56, 161, 105, 0.05) -25px 25px',
								transition: '0.5s',
								transform: 'translate(25px, -25px)',
								zIndex: 1,
							}}
						>
							<Box width="50px" height="50px" backgroundColor="green.500" borderRadius="full" />
							<Text>{pain.title}</Text>
							<Text fontSize="sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium rem? Repellendus ipsam
							</Text>
						</Flex>
					))}
				</Flex>

				<Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
					Some conclusion text for this section
				</Text>
			</Section>

			{/* how section */}
			<SectionSplit
				hasPaddingXOnLeft
				left={
					<Flex
						flexDirection="column"
						minHeight={{ base: '500px', md: '768px' }}
						justifyContent="space-evenly"
						alignItems="center"
					>
						<Heading as="h2" fontFamily="heading" fontSize={{ base: '5xl', md: '6xl' }} fontWeight="light">
							Provemos A Ajuda Que Você Precisa
						</Heading>

						<Center
							width="full"
							height="full"
							position="relative"
							flexGrow={1}
							overflow={{ base: 'hidden', lg: 'inherit' }}
						>
							<Img
								src="images/landing/how-img1.jpeg"
								width="50%"
								height="50%"
								maxWidth="384px"
								borderRadius="2xl"
								zIndex={2}
								position="absolute"
								bottom={8}
								left={{ base: 10, md: 20 }}
							/>
							<Img
								src="images/landing/how-img2.jpeg"
								width="50%"
								height="70%"
								maxWidth="384px"
								maxHeight="400px"
								borderRadius="2xl"
								border="4px solid #fff"
								position="absolute"
								zIndex={1}
								transform="rotate(15deg)"
								right={{ base: 16, lg: 30 }}
							/>
						</Center>
					</Flex>
				}
				hasPaddingXOnRight
				right={
					<Flex
						flexDirection="column"
						minHeight={{ base: '500px', md: '768px' }}
						justifyContent="space-evenly"
						alignItems="center"
						gap={4}
						py={{ base: 4, lg: 0 }}
					>
						{Home.HowRight.map((how, i) => (
							<Flex key={i} px={12} gap={4} flexDirection="column">
								<Text fontFamily="heading" fontSize="4xl" color="black">
									{how.title}
								</Text>
								<Text>{how.description}</Text>

								<Divider />
							</Flex>
						))}
					</Flex>
				}
			/>
		</Fragment>
	)
}

export namespace Home {
	export const ProfileImgPaths = [
		// could get based on our the first users
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
		'images/profiles/img1.jpg',
		'images/profiles/img2.jpg',
	]

	export const GraphColorPattern = {
		first: 'red.500',
		second: 'green.400',
	}

	export const Pains = [
		{ title: 'Lorem', icon: '', description: '...' },
		{ title: 'Ipsum', icon: '', description: '...' },
		{ title: 'Dolor', icon: '', description: '...' },
		{ title: 'Sit', icon: '', description: '...' },
	]

	export const HowRight = [
		{
			title: 'Sem Comissões Ou Tarifas Escondidas',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
		{
			title: 'Melhor Escolha Para Grandes Pagamentos',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
		{
			title: 'Plataforma Construída Para Facilitar A Administração',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
	]
}
