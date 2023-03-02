class Empresa {
  public readonly colaboradores: Colaborador[] = []
  constructor(public readonly name: string, private readonly cnpj: string) {

  }

  addColaborador(colaboradores: Colaborador):void {
    this.colaboradores.push(colaboradores)
  }

}

class Colaborador {
  constructor(readonly name:string, readonly lastName: string, readonly status: string) {

  } 
}

const empresa1 = new Empresa('Delta', '111.1111/111-11')
const colaborador1 = new Colaborador('Thamyris', 'Cabral', 'contratada')
const colaborador2 = new Colaborador('Carlos', 'Arraes', 'Contratada')
const colaborador3 = new Colaborador('Joao', 'Arraes', 'Demitido porque não para de conversar')
empresa1.addColaborador(colaborador1)
empresa1.addColaborador(colaborador2)
empresa1.addColaborador(colaborador3)
console.log(empresa1)