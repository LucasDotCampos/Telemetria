import { View, ScrollView, SafeAreaView, Text, Dimensions } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { data } from "./../../services/fakeapi";

import { IMaquinas } from "../../interfaces";
import Table from "../../components/Table";

const SITUATIONS = [
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
];

export default function CompanyMonitoring() {
  const [tableHead2, setTableHead2] = useState([]);

  const [foraDeCiclo, setForaDeCiclo] = useState<IMaquinas[]>([]);
  const [aguardandoTecnico, setAguardandoTecnico] = useState<IMaquinas[]>([]);
  const [reinicio, setReinicio] = useState<IMaquinas[]>([]);
  const [paradaManutencao, setParadaManutencao] = useState<IMaquinas[]>([]);
  const [ligacaoPerifericos, setLigacaoPerifericos] = useState<IMaquinas[]>([]);
  const [paradaFerramentaria, setParadaFerramentaria] = useState<IMaquinas[]>(
    []
  );
  const [trocaMolde, setTrocaMolde] = useState<IMaquinas[]>([]);
  const [paradaMprima, setParadaMprima] = useState<IMaquinas[]>([]);
  const [paradaOutrosMotivos, setParadaOutrosMotivos] = useState<IMaquinas[]>(
    []
  );
  const [alarmeRefugo, setAlarmeRefugo] = useState<IMaquinas[]>([]);
  const [paradaSp, setParadaSp] = useState<IMaquinas[]>([]);

  const tableHead = [
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  const fetchData = async () => {
    // const { setores } = (await api.get('/')).data;
    const { setores } = data;
    let foradeCiclo: IMaquinas[] = [];
    let aguardandoTecnico: IMaquinas[] = [];
    let reinicioDomFer: IMaquinas[] = [];
    let paradaManutencao: IMaquinas[] = [];
    let ligacaoPerifericos: IMaquinas[] = [];
    let paradaFerramentaria: IMaquinas[] = [];
    let trocaMolde: IMaquinas[] = [];
    let paradaMPrima: IMaquinas[] = [];
    let paradaOutrosMotivos: IMaquinas[] = [];
    let alarmeDeRefugo: IMaquinas[] = [];
    let paradaSP: IMaquinas[] = [];

    setores.forEach((setor) => {
      setor.situacoes.map((situacao) => {
        switch (situacao.idSituacao) {
          case 0:
            foradeCiclo.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 1:
            aguardandoTecnico.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 2:
            reinicioDomFer.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 3:
            paradaManutencao.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 4:
            ligacaoPerifericos.push(
              situacao.maquinas.map((maquina) => maquina)
            );
            break;
          case 5:
            paradaFerramentaria.push(
              situacao.maquinas.map((maquina) => maquina)
            );
            break;
          case 6:
            trocaMolde.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 7:
            paradaMPrima.push(situacao.maquinas.map((maquina) => maquina));
            break;
          case 8:
            paradaOutrosMotivos.push(
              situacao.maquinas.map((maquina) => maquina)
            );
            break;
          case 9:
            alarmeDeRefugo.push(situacao.maquinas.map((maquina) => maquina));
            break;
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

  const renderItems = (items: IMaquinas, index: number) => {
    if (items.length === 0) {
      return (
        <View key={index} style={{ paddingHorizontal: 21 }}>
          <Text> </Text>
        </View>
      );
    }

    return items.map((i) => {
      return (
        <View key={i.idMaquina} style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: i.corFonte }}>{i.idMaquina}</Text>
        </View>
      );
    });
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <Table />
    </SafeAreaView>
  );
}
