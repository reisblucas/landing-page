import { Box, Flex, Img } from '@chakra-ui/react'

export function DoctorGradient() {
	return (
		<Flex justifyContent="center" overflow="hidden" position="relative">
			<Img
				src="images/landing/doctor2.webp"
				boxSize="sm"
				zIndex={1}
				alt="Doutora sorrindo, vestida com um jaleco junto do estetoscópio, está segurando e olhando para o iPad"
			/>
			<Box
				w={{ base: '85%', md: '80%' }}
				h="50%"
				position="absolute"
				bottom={{ base: 32, md: 32 }}
				left={{ base: 12, md: 20 }}
				borderTopRadius="16rem"
				bgGradient={`repeating-linear-gradient(
      180deg,
      #b5eac3,
      #b5eac3 0%,
      transparent 5%,
      transparent 10px
    )`}
			/>
		</Flex>
	)
}
