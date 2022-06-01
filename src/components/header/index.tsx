import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IConfig {
  ip: string;
  port: string;
}

interface IPageName {
  pageName: string;
}

export const HeaderComponent = ({ pageName }: IPageName) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  let config: IConfig;

  const handleSubmit = async () => {
    await AsyncStorage.setItem("@mapapp:config", JSON.stringify({ ip, port }));
    const response = await AsyncStorage.getItem("@mapapp:config");

    setOpenSettings(false);
  };

  const handleGetConfig = async () => {
    config = JSON.parse(await AsyncStorage.getItem("@mapapp:config"));

    if (!config) return;

    setIp(config.ip);
    setPort(config.port);
  };

  useEffect(() => {
    handleGetConfig();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text}>PAM PLÁSTICOS</Text>
      </View>
      <View style={styles.textbox2}>
        <Text style={styles.text}>{pageName}</Text>
      </View>
      <View style={styles.iconbox}>
        <TouchableOpacity onPress={() => setOpenSettings(true)}>
          <Ionicons name="menu" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        animationType="slide"
        onRequestClose={() => setOpenSettings(false)}
        visible={openSettings}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modal_text}>Configurar Servidor</Text>
            <View style={styles.input_container}>
              <Text style={styles.label}>Servidor</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setIp(text)}
                value={ip}
              />
            </View>
            <View style={styles.input_container}>
              <Text style={styles.label}>Porta</Text>
              <TextInput
                onChangeText={(text) => setPort(text)}
                style={styles.input}
                value={port}
              />
            </View>
            <Button onPress={handleSubmit} title="Finalizar" />
          </View>
        </View>
      </Modal>
    </View>
  );
};
