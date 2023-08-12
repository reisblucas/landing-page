import { Box, Center, Text, VStack, keyframes } from '@chakra-ui/react'

import { useColorsThemeBased } from '@/helpers'
import { ButtonHero, DoctorGradient, SectionSplit } from '@/ui'
import { motion } from 'framer-motion'

export function CTABottom() {
	const theming = useColorsThemeBased()

	const animationKeyframes = keyframes`
  50%  { transform: scale(1.05); }
`
	const animation = `${animationKeyframes} 1.5s ease-in-out infinite`

	return (
		<SectionSplit
			hasPaddingXOnRight
			hasPaddingXOnLeft
			backgroundColor={theming.bgSection}
			heading="Pronto Para Começar?"
			id="start"
			ctaButton={
				<ButtonHero description="Começar Agora" variant="solid" animationParent={animation} as={motion.button} />
			}
			leftSection={
				<VStack flexDirection="column" alignItems="stretch" gap={8} maxWidth="700px">
					<VStack flexDirection="column" gap={8} overflow="hidden" position="relative">
						{CTABottom.steps.map((cta) => (
							<VStack
								key={cta.description}
								width={{ base: '200px', md: '200px' }}
								height={{ base: '200px', md: '200px' }}
								borderRadius="3xl"
								padding={8}
								alignSelf={cta.alignSelf}
								justifyContent="center"
								alignItems="center"
								marginRight={!!cta.marginRight ? cta.marginRight : undefined}
								backgroundColor={theming.bgHero}
								zIndex={2}
							>
								<Box border="2px solid" borderColor={cta.color} px={4} py={2} borderRadius="3xl">
									<Text fontSize="4xl" fontFamily="heading" color={cta.color}>
										{cta.step}
									</Text>
								</Box>
								<Text textAlign="center" fontSize="md">
									{cta.description}
								</Text>
							</VStack>
						))}

						<Box
							width="50%"
							height="80%"
							position="absolute"
							zIndex={1}
							borderTop="3px solid"
							borderRight="3px solid"
							borderBottom="3px solid"
							borderStyle="dashed"
							borderColor="green.300"
							borderRightRadius="full"
							transform="rotate(-15deg) translate(15%)"
						/>
					</VStack>
				</VStack>
			}
			rightSection={
				<>
					{/* refactor this section */}
					<Center
						width="full"
						height="full"
						position="relative"
						flexGrow={1}
						overflow={{ base: 'hidden', lg: 'inherit' }}
					>
						<DoctorGradient />
					</Center>
				</>
			}
		/>
	)
}

export namespace CTABottom {
	export const steps = [
		{ step: '01', description: 'Cadastre-se em poucos minutos', color: 'blue.200', alignSelf: 'flex-start' },
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
