type TemNome = { nome: string}
type TemSobrenome = { sobrenome: string}
type TemIdade = { idade?: number}
type Uniao = TemNome & TemSobrenome & TemIdade

const tem: Uniao = {
nome: 'bla',
sobrenome: 'blu',
idade: 10,
}