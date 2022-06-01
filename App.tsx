import React from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import CompanyMonitoring from "./src/screens/CompanyMonitoring";
<<<<<<< HEAD
import Table from "./src/components/Table";
=======
import Home from "./src/screens/Home";
import { Routes } from "./src/routes";
>>>>>>> 66f3ecea562f10a313153f62a9ed1573170354f9

export default function App() {
  LogBox.ignoreAllLogs(true);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    BebasNeue_400Regular,
  });

  ScreenOrientation?.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  if (!fontsLoaded) return <AppLoading />;

<<<<<<< HEAD
  return <Table />;
=======
  return <Routes />;
>>>>>>> 66f3ecea562f10a313153f62a9ed1573170354f9
}
