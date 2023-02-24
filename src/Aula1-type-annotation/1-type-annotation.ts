const nome: string = 'Thamyris';
const idade: number = 34;
const adulto: boolean = true;
const simbolo: symbol = Symbol('simbolo-aqui');
// const big: bigint = 10n;

const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings: Array<string> = ['a', 'b'];

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'thamyris',
  idade: 34,
  adulto: true,
};

console.log(pessoa.nome);

function sum(x: number, y: number) {
  return x + y;
}
console.log(sum(2, 2));

const sum2: (x: number, y: number) => number = (x, y) => x + y;

console.log(sum2(3, 3));
