import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({} as any);
  useEffect(() => {
    firestore()
      .collection("users")
      .doc("userId")
      .get()
      .then((snap) => setUser(snap.data()));
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Hello, {user.displayName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
