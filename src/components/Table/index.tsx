import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Col, Row, Grid } from "react-native-easy-grid";
import { data } from "./../../services/fakeapi";
import { IMaquinas } from "../../interfaces";
import { fonts } from "../../globalstyles/fonts";
import CurrentTime from "../currentTime";

export default function Table() {
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

  const tableHead = [
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView horizontal>
          <Grid style={styles.grid}>
            <Row style={styles.head1}>
              <Col style={styles.head1Col1}>
                <Text style={styles.text}>{tableHead[0]}</Text>
              </Col>
              <Col style={styles.head1Col2}>
                <Text style={styles.text}>{tableHead[1]}</Text>
              </Col>
              <Col style={styles.head1Col1}>
                <Text style={styles.text}>{tableHead[2]}</Text>
              </Col>
            </Row>
            <Row style={styles.head2}>
              <Col style={styles.headCol2}>
                <CurrentTime />
              </Col>
              {data.setores.map((setor, index) => (
                <Col key={index} style={styles.headCol2}>
                  <Text style={styles.text}>{setor.dsSetor}</Text>
                </Col>
              ))}
            </Row>
            {SITUATIONS.map((situation, indexSit) => (
              <Row key={indexSit} style={styles.body}>
                <Col style={styles.bodyCol}>
                  <Text style={styles.text}>{situation}</Text>
                </Col>
                {data.setores.map((setor, indexSetor) => (
                  <Col key={indexSetor} style={styles.bodyCol}>
                    {data.setores[indexSetor].situacoes[indexSit].maquinas.map(
                      (maquina, indexMaq) => (
                        <Text
                          style={{
                            color: maquina.corFonte,
                            fontSize: 12,
                            fontWeight: "bold",
                            textAlign: "center",
                            fontFamily: fonts.roboto400,
                            marginEnd: 5,
                          }}
                        >
                          {maquina.idMaquina}
                        </Text>
                      )
                    )}
                  </Col>
                ))}
              </Row>
            ))}
          </Grid>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
