enum Cores {
  vermelho,
  amarelo,
  azul
}

console.log(Cores)
console.log(Cores.vermelho)
console.log(Cores[1])

enum Cores2 {
  vermelho = 10,
  amarelo = 100,
  azul =200,
  roxo = 'roxos',
  rosa = 10,
  preto,
}

console.log(Cores2)
console.log(Cores2.vermelho)
console.log(Cores2[10])
console.log(Cores2.roxo)
console.log(Cores2.preto)