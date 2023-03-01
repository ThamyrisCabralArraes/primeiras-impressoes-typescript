type Idade = number

type Pessoa = {
  nome: string,
  idade: Idade,
  corpreferida?: string,
}

type Cor1 = 'vermelho' | 'azul' | 'verde'
type Cor2 = 'preto' | 'roxo' | 'rosa'
type Corjuntas = Cor1 | Cor2
// essa parte de cima é type alias, em baixo é usando os tipos

const info: Pessoa = {
  nome: 'thamyris',
  idade: 34,
} 

function pessoaMaisCor(pessoa: Pessoa, cor: Corjuntas) {
  return { ...pessoa, corpreferida: cor}  
}

console.log(pessoaMaisCor(info, 'azul'))
// nao muda o objeto original
console.log(info)