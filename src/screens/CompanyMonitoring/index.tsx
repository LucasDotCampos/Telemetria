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
    let foradeCiclo = [];

    setores.forEach(setor => {
      setor.situacoes.map(situacao => {
        switch (situacao.idSituacao) {
          case 8:
            foradeCiclo.push(situacao.maquinas.map(maquina => maquina));
          break;
        }
      });
    });


    let header: any = [
      <CurrentTime />,
      ...setores?.map((sector) => sector.dsSetor)
    ];
    setTableHead2(header);
    updateStates(
      foradeCiclo
    );
  };

  const updateStates = (foradeciclo) => {
    setForaDeCiclo(foradeciclo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = (items) => {
    return items.map( (i, index) => {
      return (
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: i.corFonte }}>{i.idMaquina}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View>
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
                {
                  foraDeCiclo.map((f, index) => {
                    console.log(f);
                    return (
                      <Row
                        flexArr={[1,1,1]}
                        data={[renderItems(f)]}
                      />
                    );
                  })
                }
              </TableWrapper>
            </ScrollView>
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
