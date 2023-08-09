import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	Icon,
	Img,
	Show,
	Text,
	VStack,
	useColorMode,
} from '@chakra-ui/react'
import { FaArrowDown, FaArrowRight, FaCheck } from 'react-icons/fa'
import { Fragment } from 'react'

import { Section, SectionSplit } from '@/ui'

export function Home() {
	const businessName = 'Lorem'

	const cm = useColorMode()
	const callToActionBg = cm.colorMode === 'light' ? 'white' : 'blue.900'

	return (
		<Fragment>
			<SectionSplit
				hasPaddingXOnLeft
				leftSection={
					<Flex flexDirection="column" height={{ base: '100vh', lg: '80vh' }} justifyContent="center">
						<Show below="lg">
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

						<Button
							borderRadius="full"
							px={8}
							py={4}
							variant="outline"
							colorScheme="green"
							width="fit-content"
							alignSelf="center"
						>
							Saiba mais
							<Icon as={FaArrowDown} stroke="background-hero" ml={4} />
						</Button>
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

			{/* Pain section */}
			<Section backgroundColor="#fcf1e0" gap={8} borderTopRadius="3xl" hasPaddingX>
				<Heading
					as="h2"
					fontSize={{ base: '4xl', md: '6xl' }}
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
							<Box width="50px" height="50px" backgroundColor="green.200" borderRadius="full" />
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
				leftSection={
					<Flex
						flexDirection="column"
						minHeight={{ base: '500px', md: '768px' }}
						justifyContent="space-evenly"
						alignItems="center"
					>
						<Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="light">
							Providenciamos A Ajuda Que Você Precisa
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
				rightSection={
					<Flex
						flexDirection="column"
						minHeight={{ base: '500px', md: '768px' }}
						justifyContent="space-evenly"
						alignItems="center"
						gap={4}
						py={{ base: 4, lg: 0 }}
					>
						{Home.HowRight.map((how, i) => (
							<Flex
								key={i}
								px={12}
								gap={4}
								flexDirection="column"
								opacity={0.6}
								_hover={{
									opacity: 1,
									transition: 0.5,
								}}
							>
								<Text fontFamily="heading" fontSize="4xl" color="black">
									{how.title}
								</Text>
								<Text>{how.description}</Text>

								<Divider border="2px solid" borderColor="green.200" borderRadius="full" />
							</Flex>
						))}
					</Flex>
				}
			/>

			{/* Call to action section */}
			<Section hasPaddingX alignItems="center">
				<Flex
					width={{ base: '95%', lg: '80%' }}
					px={16}
					py={12}
					borderRadius="3xl"
					backgroundImage={{
						base: 'images/landing/cta-middle-vertical.svg',
						md: 'images/landing/cta-middle-horizontal.svg',
					}}
					backgroundColor={callToActionBg}
					backgroundRepeat="no-repeat"
					backgroundPosition={{ base: 'bottom -650px left -460px', md: 'top -350px left 200px' }}
					backgroundSize={{ base: '1200px', md: 'auto' }}
				>
					<Flex width={{ base: 'full', md: '60%' }} flexDirection="column" gap={8} flexGrow={{ base: 1, lg: 0 }}>
						<Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="light">
							Economize Dinheiro Como Nunca Antes
						</Heading>

						<Button borderRadius="full" px={8} py={4} variant="outline" colorScheme="green" width="fit-content">
							Começar
							<Icon as={FaArrowRight} ml={4} />
						</Button>

						<Flex
							gap={2}
							flexDirection="column"
							sx={{
								div: {
									gap: 2,
									alignItems: 'center',
								},
							}}
						>
							<Flex>
								<Icon as={FaCheck} />
								<Text>
									Alguma coisa que{' '}
									<Text as="span" fontWeight="bold">
										funciona para você
									</Text>
								</Text>
							</Flex>

							<Flex>
								<Icon as={FaCheck} />
								<Text>
									Gerenciamento de gastos,{' '}
									<Text as="span" fontWeight="bold">
										gerenciado
									</Text>
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Section>

			{/* How section */}
			<Section hasPaddingX justifyContent="center" backgroundColor="#fcf1e0" borderTopRadius="3xl">
				<Flex width={{ base: '80%', md: '50%' }} justifyContent="center" m="0 auto" flexDirection="column" gap={4}>
					<Heading as="h2" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="light" textAlign="center">
						Gerencie Facilmente
						<br />A Sua{' '}
						<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="green.200" px={4}>
							Vida
						</Text>
						,
						<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="blue.200" px={4}>
							Trabalho
						</Text>{' '}
						&{' '}
						<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="yellow.200" px={4}>
							Família
						</Text>
					</Heading>

					<Text fontSize={{ base: 'inherit', md: 'sm' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi, exercitationem ea eum tempora
						odit est quos nostrum pariatur ipsam molestiae maxime dolor quia officiis rem praesentium accusamus vero
						non?
					</Text>
				</Flex>
			</Section>

			{/* Another Call to Action */}
			<SectionSplit
				hasPaddingXOnRight
				hasPaddingXOnLeft
				backgroundColor="#fcf1e0"
				leftSection={
					<VStack flexDirection="column" alignItems="stretch" gap={8}>
						<Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="light">
							Pronto Para Começar?
						</Heading>

						<VStack flexDirection="column" gap={8}>
							{Home.BottomCTA.map((cta) => (
								<VStack
									key={cta.description}
									width={{ base: '100px', md: '200px' }}
									height={{ base: '100px', md: '200px' }}
									borderRadius="3xl"
									padding={8}
									alignSelf={cta.alignSelf}
									justifyContent="center"
									alignItems="center"
									marginRight={!!cta.marginRight ? cta.marginRight : undefined}
									// add ligh and dark mode condition here
									backgroundColor="background-hero"
								>
									<Box border="2px solid" borderColor={cta.color} px={4} py={2} borderRadius="3xl">
										<Text fontSize="4xl" fontFamily="heading">
											{cta.step}
										</Text>
									</Box>
									<Text textAlign="center" fontSize="md">
										{cta.description}
									</Text>
								</VStack>
							))}
						</VStack>
					</VStack>
				}
				rightSection={<></>}
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

	export const BottomCTA = [
		{ step: '01', description: 'Cadastre-se em poucos minutos', color: 'green.200', alignSelf: 'flex-start' },
		{
			step: '02',
			description: 'Iremos verificar os seus dados',
			color: 'red.200',
			alignSelf: 'flex-end',
		},
		{
			step: '03',
			description: 'Comece a economizar dinheiro!',
			color: 'purple.200',
			alignSelf: 'center',
			marginRight: '100px',
		},
	]
}
