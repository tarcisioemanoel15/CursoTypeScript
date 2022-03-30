/* funao ou metodo do tipo void não retorna nada */

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('tar', 'ema');

const pesoa = {
  nome: 'Tarcisio',
  sobreNome: 'Emanoel',

  exieNome(): void {
    console.log(this.nome + ' ' + this.sobreNome);
  },
};

pesoa.exieNome();
export { pesoa };
//Não retorna nada so exie o valor
