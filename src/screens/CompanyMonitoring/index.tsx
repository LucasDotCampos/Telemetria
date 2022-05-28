import { View, ScrollView, Text, FlatList } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function CompanyMonitoring() {
  const [sectors, setSectors] = useState([]);
  const tableHead = [
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  const tableHead2 = [
    <CurrentTime />,
    "SETOR 01",
    "SETOR 02",
    "SETOR 03",
    "SETOR 04",
    "SETOR 05",
    "SETOR 06",
  ];
  const tableSituation = [
    ["FORA DE CICLO", "", "39 26", "44", "", "30 57 66", "59 11 13", ,],
    ["AGUARDANDO TECNICO", "", "", "", "", "", "", ""],
    ["REINICIO(DOM/FER)", "", "", "", "", "", ""],
    ["PARADA - MANUTENÇAO", "", "", "", "", "", ""],
    ["LIGACAO DE PERIFERICOS", "", "", "", "", "56 49", " 68 69"],
    ["PARADA - FERRAMENTARIA", "", "", "", "", "48 52", ""],
    ["TROCA DE MOLDE", "", "", "", "", "", ""],
    ["PARADAS M.PRIMA", "", "", "", "", "", ""],
    ["PARADA - OUTROS MOTIVOS", "", "27", "", "", "67 46", ""],
    ["ALARME DE REFUGO", "", "39", "44", "", "", "10 09 13 11"],
    ["PARADA - SP", "22", "34", "40", "65", "53 37 55", "65 28"],
  ];

  const getSectors = async () => {
    const { data } = await api.get('/');
    setSectors(data.setores);
  };

  useEffect(() => {
    getSectors();
  }, []);

  return (
    <>
      <ScrollView>
        <ScrollView horizontal={true}>
          {
            sectors.length > 0 && (
              <FlatList
                data={sectors}
                renderItem={({ item, index}) => <Text>{item.dsSetor}</Text>}
              />
            )
          }

        </ScrollView>
      </ScrollView>
    </>
  );
}
