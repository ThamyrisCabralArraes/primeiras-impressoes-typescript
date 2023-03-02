const pesoa = {
  name: 'thamyris' as const,
  sobrenome: 'Cabral'
}

function colors(cor: 'vermelho' | 'azul'): string {
  return cor
}
console.log(colors('azul'))