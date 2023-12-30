import React from "react";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/** Child root */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
