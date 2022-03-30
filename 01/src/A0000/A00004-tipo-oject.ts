const obetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

obetoA.chaveA = 'outro valor';
obetoA.chaveC = 'novachave';
obetoA.chaveD = 'chave D';

// readonly para não mudar mais a chave
const obetoB: {
  readonly chave1: number;
  chave2: number;
} = {
  chave1: 123,
  chave2: 456,
};

obetoB.chave2 = 789;

console.log(obetoB);
