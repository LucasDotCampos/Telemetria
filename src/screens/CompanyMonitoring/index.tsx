import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { data } from './../../services/fakeapi';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const SITUATIONS = {
  text: [
    'FORA DE CICLO',
    'AGUARDANDO TECNICO',
    'REINICIO(DOM/FER)',
    'PARADA - MANUTENÇAO',
    'LIGACAO DE PERIFERICOS',
    'PARADA - FERRAMENTARIA',
    'TROCA DE MOLDE',
    'PARADAS M.PRIMA',
    'PARADA - OUTROS MOTIVOS',
    'ALARME DE REFUGO',
    'PARADA - SP'
  ],
  height: [
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
  ]
};

export default function CompanyMonitoring() {
  const [tableHead2, setTableHead2] = useState([]);
  const [situations, setSituations] = useState([]);
  const tableHead = [
    "",
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];
  const [foraDeCiclo, setForaDeCiclo] = useState<any>([]);

  const fetchData = async () => {
    // const { setores } = (await api.get('/')).data;
    const { setores } = data;
    let teste = [];


    setores.forEach(setor => {
      let array = [];

      setor.situacoes.map(situacao => {
        switch (situacao.idSituacao) {
          case 8:
            array.push(situacao.maquinas.map(maquina => maquina))
          break;
        }
      })

      teste.push(array);
    });

    let header: any = [
      <CurrentTime />,
      ...setores?.map((sector) => sector.dsSetor)
    ];
    setTableHead2(header);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View>
          <Text onPress={() => console.log(foraDeCiclo)} style={{ color: 'red'}}>CLIQUE AQUI</Text>
          <Table borderStyle={{borderWidth: 1, borderColor: '#cacaca'}}>
            <Row
              data={tableHead}
              textStyle={{
                color: '#fff',
                paddingHorizontal: 8
              }}
              flexArr={[1, 1, 1, 1]}
            />
            <Row
              data={tableHead2}
              textStyle={{
                color: '#fff',
                paddingHorizontal: 8
              }}
              flexArr={[1, 1, 1, 1]}
            />
            <ScrollView horizontal>
              <TableWrapper
                style={{ flexDirection: 'row' }}
                borderStyle={{ borderWidth: 1, borderColor: '#cacaca' }}
              >
                <Col
                  data={SITUATIONS.text}
                  heightArr={SITUATIONS.height}
                  textStyle={{
                    color: '#fff',
                    paddingHorizontal: 8
                  }}
                />
                <Rows
                  textStyle={{ color: '#fff' }}
                  data={[
                    // foraDeCiclo
                  ]}
                />
              </TableWrapper>
            </ScrollView>
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
