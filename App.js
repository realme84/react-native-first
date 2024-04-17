import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>22MIA1189</Text>
      <Button title="Rasipogula Gnaneswar "> </Button>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "white",
    fontSize: 20,
  },
});
