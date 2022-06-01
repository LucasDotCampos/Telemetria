import { StyleSheet, StatusBar } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "red",
  },
});
