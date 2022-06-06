// console.log('O formulario esta na outra pasta');
// console.log();

// Empresa1 forma longa Empresa2 curta
// unir as duas enpresas

export class Empresa1 {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly colaboradores: Empresa2[] = [];
  addcolaborador(colab: Empresa2): void {
    this.colaboradores.push(colab);
  }
  mostrarColaborador(): void {
    for (const colaboradorr of this.colaboradores)
      console.log(colaboradorr, 'mostrar');
  }
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
export class Empresa2 {
  constructor(public readonly name: string, protected readonly cnpj: string) {
    // this.name = name;
    // this.cnpj = cnpj;
  }
}
const emp1 = new Empresa1('Tarcisio', '111.111.111/1111-11');
const colaborador1 = new Empresa2('Tarcisio', '111.111.111/1111-10');
const colaborador2 = new Empresa2('Emanoel', '111.111.111/1111-12');
const colaborador3 = new Empresa2('Andressa', '111.111.111/1111-13');
// console.log(colaborador1, colaborador2, colaborador3);
emp1.addcolaborador(colaborador1);
emp1.addcolaborador(colaborador2);
emp1.addcolaborador(colaborador3);
console.log(emp1);
emp1.mostrarColaborador();
