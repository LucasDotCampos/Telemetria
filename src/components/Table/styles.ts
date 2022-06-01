import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: fonts.roboto400,
  },
  grid: {
    flex: 1,
  },
  head1: {},
  head1Col1: {
    justifyContent: "center",
    backgroundColor: "#222",
    borderEndColor: "#444",
    borderEndWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    padding: 5,
    maxWidth: 230,
  },
  head1Col2: {
    justifyContent: "center",
    backgroundColor: "#222",
    borderEndColor: "#444",
    borderEndWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    padding: 5,
  },
  head2: {},
  headCol2: {
    minWidth: 230,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#222",
    borderColor: "#444",
    borderEndWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
  body: {
    flex: 1,
    borderColor: "#444",
    borderBottomWidth: 1,
  },
  bodyCol: {
    flex: 1,
    flexDirection: "row",
    borderColor: "#444",
    borderEndWidth: 1,
    justifyContent: "center",
    minWidth: 230,
    padding: 20,
  },
});
