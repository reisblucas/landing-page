import * as React from 'react'
import { ChakraProvider, Box, Text, Grid } from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Fonts, theme } from './infra/chakra'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Fonts />
		{/* Put routers here */}
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				<ColorModeSwitcher justifySelf="flex-end" />

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro quam suscipit culpa quo aut eius inventore
					ut facilis pariatur optio, iusto esse, veniam earum qui ipsa corrupti? Quidem, quas?
				</Text>
			</Grid>
		</Box>
	</ChakraProvider>
)
