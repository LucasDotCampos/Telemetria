import { StyleSheet, StatusBar } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    width: '100vw',
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  head: {
    height: 22,
    backgroundColor: "#333333",
  },

  sectorHead: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  headText: {
    textAlign: "center",
    fontFamily: fonts.roboto400,
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
  text: {
    textAlign: "center",
    fontFamily: fonts.roboto400,
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
  },

  data: {
    height: 35,
  },
  data2: {
    display: "flex",
    flexDirection: "column",
  },
});
