import { Button, Flex, Heading, Icon, Img, Show, Text } from '@chakra-ui/react'

import { DoctorGradient, SectionSplit } from '@/ui'
import { FaArrowDown } from 'react-icons/fa'

export function Home() {
	const businessName = 'Lorem'

	return (
		<SectionSplit
			hasPaddingXOnLeft
			left={
				<Flex flexDirection="column" height="80vh" justifyContent="center">
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

					<Text fontSize="md">
						{businessName} simplifica a vida dos médicos. Gerenciamento, rastreamento e pagamento - tudo em um só lugar.
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
							Saber mais
							<Icon as={FaArrowDown} stroke="background-hero" />
						</Button>
					</Flex>
				</Flex>
			}
			right={
				<Flex flexDirection="column" h={{ base: '768px', lg: 'full' }} borderTopRadius={32} justifyContent="center">
					<Show above="lg">
						<Img src="images/landing/lorem-logo.png" maxW="50%" maxH="50%" m="0 auto" />
					</Show>

					<Show below="md">
						<DoctorGradient />
					</Show>
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
