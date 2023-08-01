import * as React from 'react'
import { ChakraProvider, Box, Text, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />

        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          excepturi tenetur et accusamus, harum quo ad incidunt architecto totam
          hic earum distinctio maxime autem ullam rem voluptatem? Rem, nihil
          reiciendis.
        </Text>
      </Grid>
    </Box>
  </ChakraProvider>
)
