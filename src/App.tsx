import { ChakraProvider } from '@chakra-ui/react'

import { Fonts, theme } from '@/infra/chakra'
import { RouterProvider } from 'react-router-dom'
import router from '@/infra/router'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Fonts />
		<RouterProvider router={router} />
	</ChakraProvider>
)
