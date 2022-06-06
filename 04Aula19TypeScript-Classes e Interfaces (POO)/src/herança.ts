export class Pessoa {
  constructor(
    public nome: string,
    public sobnome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getNomecompleto(): string {
    return this.nome + ' ' + this.sobnome;
  }

  getSobNome(): string {
    return this.sobnome;
  }

  getnome(): string {
    return this.nome;
  }
}

export class Aluno extends Pessoa {
  getNomecompleto(): string {
    return `isso vem do aluno ${this.nome} ${this.sobnome}`;
  }
}
export class Client extends Pessoa {
  getNomecompleto(): string {
    return `isso vem do client ${this.nome} ${this.sobnome}`;
  }
}

const pesoa1 = new Pessoa('Tarcisio', 'Emanoel', 12, '000.000.000-00');
const aluno = new Aluno('Tarcisio', 'Emanoel', 12, '111.111.111-11');
const client = new Client('Tarcisio', 'E', 12, '222.222.222-22');

console.log(pesoa1);
console.log(aluno);
console.log(client);

console.log(pesoa1.getNomecompleto());
console.log(aluno.getNomecompleto());
console.log(client.getNomecompleto());
