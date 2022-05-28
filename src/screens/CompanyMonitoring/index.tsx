import { Table, Row, Rows } from "react-native-table-component";
import { View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function CompanyMonitoring() {
  const [sectors, setSectors] = useState([]);
  const [tableHead2, setTableHead2] = useState([]);
  const tableHead = [
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  const fetchData = async () => {
    const { setores } = (await api.get('/')).data;

    setSectors(setores);

    let header: any = [
      <CurrentTime />,
      ...setores?.map((sector) => sector.dsSetor)
    ];

    let teste = setores.map(setor => {
      return new Set(setor.situacoes.map(situacao => getSituacao(situacao.idSituacao)))
    })

    console.log(teste);
    setTableHead2(header);
  };

  const getSituacao = (type: number): string => ({
    0: 'FORA DE CICLO',
    1: 'AGUARDANDO TECNICO',
    2: 'REINICIO(DOM/FER)',
    3: 'PARADA - MANUTENÇAO',
    4: 'LIGACAO DE PERIFERICOS',
    5: 'PARADA - FERRAMENTARIA',
    6: 'TROCA DE MOLDE',
    7: 'PARADAS M.PRIMA',
    8: 'PARADA - OUTROS MOTIVOS',
    9: 'ALARME DE REFUGO',
    10: 'PARADA - SP'
  }[type] || 'paginasitedotz');

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {
            sectors.length > 0 && (
              <Table
                borderStyle={{
                  borderWidth: 1,
                  borderColor: "#b8babd",
                }}
              >
                <Row
                  data={tableHead}
                  widthArr={[200, 750, 150]}
                  style={styles.head}
                  textStyle={styles.headText}
                />
                <Row
                  data={tableHead2}
                  widthArr={[200, 150, 150, 150, 150, 150, 150]}
                  style={styles.head}
                  textStyle={styles.headText}
                />

                {/* <Rows
                  data={tableSituation}
                  widthArr={[200, 150, 150, 150, 150, 150, 150]}
                  textStyle={styles.text}
                  style={styles.data}
                /> */}
              </Table>
            )
          }
        </View>
      </ScrollView>
    </ScrollView>
  );
}
