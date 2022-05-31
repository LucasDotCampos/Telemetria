import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { data } from "./../../services/fakeapi";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

const SITUATIONS = {
  text: [
    "FORA DE CICLO",
    "AGUARDANDO TECNICO",
    "REINICIO(DOM/FER)",
    "PARADA - MANUTENÇAO",
    "LIGACAO DE PERIFERICOS",
    "PARADA - FERRAMENTARIA",
    "TROCA DE MOLDE",
    "PARADAS M.PRIMA",
    "PARADA - OUTROS MOTIVOS",
    "ALARME DE REFUGO",
    "PARADA - SP",
  ],
  height: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};

export default function CompanyMonitoring() {
  const [tableHead2, setTableHead2] = useState([]);

  const [foraDeCiclo, setForaDeCiclo] = useState<any>([]);
  const [aguardandoTecnico, setAguardandoTecnico] = useState<any>([]);
  const [reinicio, setReinicio] = useState<any>([]);
  const [paradaManutencao, setParadaManutencao] = useState<any>([]);
  const [ligacaoPerifericos, setLigacaoPerifericos] = useState<any>([]);
  const [paradaFerramentaria, setParadaFerramentaria] = useState<any>([]);
  const [trocaMolde, setTrocaMolde] = useState<any>([]);
  const [paradaMprima, setParadaMprima] = useState<any>([]);
  const [paradaOutrosMotivos, setParadaOutrosMotivos] = useState<any>([]);
  const [alarmeRefugo, setAlarmeRefugo] = useState<any>([]);
  const [paradaSp, setParadaSp] = useState<any>([]);

  const tableHead = [
    "",
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  const fetchData = async () => {
    // const { setores } = (await api.get('/')).data;
    const { setores } = data;
    let foradeCiclo = [];
    let aguardandoTecnico = [];
    let reinicioDomFer = [];
    let paradaManutencao = [];
    let ligacaoPerifericos = [];
    let paradaFerramentaria = [];
    let trocaMolde = [];
    let paradaMPrima = [];
    let paradaOutrosMotivos = [];
    let alarmeDeRefugo = [];
    let paradaSP = [];

    setores.forEach((setor) => {
      setor.situacoes.map((situacao) => {
        switch (situacao.idSituacao) {
          case 0:
            foradeCiclo.push(situacao.maquinas.map((maquina) => maquina));

          case 1:
            aguardandoTecnico.push(situacao.maquinas.map((maquina) => maquina));

          case 2:
            reinicioDomFer.push(situacao.maquinas.map((maquina) => maquina));

          case 3:
            paradaManutencao.push(situacao.maquinas.map((maquina) => maquina));

          case 4:
            ligacaoPerifericos.push(
              situacao.maquinas.map((maquina) => maquina)
            );

          case 5:
            paradaFerramentaria.push(
              situacao.maquinas.map((maquina) => maquina)
            );

          case 6:
            trocaMolde.push(situacao.maquinas.map((maquina) => maquina));

          case 7:
            paradaMPrima.push(situacao.maquinas.map((maquina) => maquina));

          case 8:
            paradaOutrosMotivos.push(
              situacao.maquinas.map((maquina) => maquina)
            );

          case 9:
            alarmeDeRefugo.push(situacao.maquinas.map((maquina) => maquina));
          case 10:
            paradaSP.push(situacao.maquinas.map((maquina) => maquina));
            break;
        }
      });
    });

    let header: any = [
      <CurrentTime />,
      ...setores?.map((sector) => sector.dsSetor),
    ];
    setTableHead2(header);
    updateStates(
      foradeCiclo,
      aguardandoTecnico,
      reinicioDomFer,
      paradaManutencao,
      ligacaoPerifericos,
      paradaFerramentaria,
      trocaMolde,
      paradaMPrima,
      paradaOutrosMotivos,
      alarmeDeRefugo,
      paradaSP
    );
  };

  const updateStates = (
    foradeciclo,
    aguardandoTecnico,
    reinicioDomFer,
    paradaManutencao,
    ligacaoPerifericos,
    paradaFerramentaria,
    trocaMolde,
    paradaMPrima,
    paradaOutrosMotivos,
    alarmeDeRefugo,
    paradaSP
  ) => {
    setForaDeCiclo(foradeciclo);
    setAguardandoTecnico(aguardandoTecnico);
    setReinicio(reinicioDomFer);
    setParadaManutencao(paradaManutencao);
    setLigacaoPerifericos(ligacaoPerifericos);
    setParadaFerramentaria(paradaFerramentaria);
    setTrocaMolde(trocaMolde);
    setParadaMprima(paradaMPrima);
    setParadaOutrosMotivos(paradaOutrosMotivos);
    setAlarmeRefugo(alarmeDeRefugo);
    setParadaSp(paradaSP);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = (items) => {
    return items.map((i, index) => {
      return (
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: i.corFonte }}>{i.idMaquina}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#cacaca" }}>
            <Row
              data={tableHead}
              textStyle={{
                color: "#fff",
                paddingHorizontal: 8,
              }}
              flexArr={[1, 1, 1, 1]}
            />
            <Row
              data={tableHead2}
              textStyle={{
                color: "#fff",
                paddingHorizontal: 8,
              }}
              flexArr={[1, 1, 1, 1]}
            />
            <ScrollView horizontal>
              <TableWrapper
                style={{ flexDirection: "row" }}
                borderStyle={{ borderWidth: 1, borderColor: "#cacaca" }}
              >
                <Col
                  data={SITUATIONS.text}
                  heightArr={SITUATIONS.height}
                  textStyle={{
                    color: "#fff",
                    paddingHorizontal: 8,
                  }}
                />
                {foraDeCiclo.map((f, index) => {
                  return (
                    <Row height={40} widthArr={[100]} data={[renderItems(f)]} />
                  );
                })}
              </TableWrapper>
            </ScrollView>
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
