export type IMaquinas = {
  idMaquina: string;
  corFonte: string;
}[];

export interface ISetor {
  dsSetor: string;
  situacoes: ISituacao[];
}

interface ISituacao {
  idSituacao: number;
  maquinas: IMaquinas;
}
