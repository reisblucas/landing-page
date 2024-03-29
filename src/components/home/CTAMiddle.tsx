import { Flex, Heading, Icon, Text, keyframes } from '@chakra-ui/react'

import { useColorsThemeBased } from '@/helpers'
import { ButtonHero, Section } from '@/ui'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

export function CTAMiddle() {
	const theming = useColorsThemeBased()

	const animationKeyframes = keyframes`
  50%  { transform: translateX(-5px); }
`
	const animation = `${animationKeyframes} 1s ease-in-out infinite`

	return (
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
				backgroundColor={theming.bgSection}
				backgroundRepeat="no-repeat"
				backgroundPosition={{ base: 'bottom -650px left -460px', md: 'top -350px left 200px' }}
				backgroundSize={{ base: '1200px', md: 'auto' }}
			>
				<Flex width={{ base: 'full', md: '60%' }} flexDirection="column" gap={8} flexGrow={{ base: 1, lg: 0 }}>
					<Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="light">
						Economize dinheiro como nunca antes
					</Heading>

					<ButtonHero description="Começar" icon={FaArrowRight} animation={animation} alignSelf="center" />

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
	)
}
