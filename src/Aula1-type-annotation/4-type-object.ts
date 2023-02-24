const pessoas: {
  pessoa1: string;
  readonly pessoa2: string; //readonly faz a chave nunca mais poder ser alterada
  [key: string]: unknown;
} = {
  pessoa1: 'pessoa1',
  pessoa2: 'pessoa2',
};

pessoas.pessoa1 = 'novapessoa1';
pessoas.pessoa3 = 'pessoa3';
pessoas.pessoa4 = 'pessoa4';
console.log(pessoas.pessoa1);
console.log(pessoas.pessoa3);
console.log(pessoas.pessoa4);
