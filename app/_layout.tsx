import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import { Slot } from "expo-router";
import theme from '@/styles/globalStyles.ts';

export default function RootLayout() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        {/** Child root */}
        <Slot />
      </Box>
    </NativeBaseProvider>
  );
}
