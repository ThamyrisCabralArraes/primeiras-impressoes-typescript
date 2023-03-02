//inmterface é a mesma coisa de type - alias
interface TipoNome {
  nome: string
}

interface TipoSobrenome {
  sobrenome: string
}

interface TipoNomeCompleto {
  NomeCompleto(): string
}

// type TipoJuntando = TipoNome & TipoSobrenome & TipoNomeCompleto  
// A linha de cima é a mesma coisa da de baixo
interface TipoJuntando2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// quando nao coloca nada é public
export class Pessoa implements TipoJuntando2 {
  constructor(public nome: string, public sobrenome: string) {}

  NomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Thamy', 'Cabral')
console.log(pessoa.NomeCompleto()) 