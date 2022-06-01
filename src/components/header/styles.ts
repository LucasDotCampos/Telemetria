import { StyleSheet } from "react-native";
import { fonts } from "./../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#4184fe",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontFamily: fonts.BebasNeue400,
  },
  icon: {
    fontSize: 26,
    color: "#fff",
    fontFamily: fonts.BebasNeue400,
  },
  textbox: {
    flex: 1,
  },
  textbox2: {
    flex: 2,
  },
  iconbox: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: "90%",
    width: 300,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
  },
  modal_text: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 24,
    marginBottom: 24,
  },
  input_container: {
    marginBottom: 24,
  },
  label: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 18,
    color: "#000",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
  },
});
