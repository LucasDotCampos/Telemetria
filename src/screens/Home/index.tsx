import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HeaderComponent } from "../../components/header";
import CompanyMonitoring from "../CompanyMonitoring";
import { styles } from "./styles";

export default function Home({ navigation }) {
  const handleMonitoring = () => {
    navigation.navigate("Monitoring");
  };
  return (
    <>
      <HeaderComponent pageName="TELEMETRIA" />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleMonitoring}>
          <Text style={styles.text}>Monitoramento</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
