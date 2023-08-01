import * as React from "react";
import { ChakraProvider, Box, Text, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro quam
          suscipit culpa quo aut eius inventore ut facilis pariatur optio, iusto
          esse, veniam earum qui ipsa corrupti? Quidem, quas?
        </Text>
      </Grid>
    </Box>
  </ChakraProvider>
);
