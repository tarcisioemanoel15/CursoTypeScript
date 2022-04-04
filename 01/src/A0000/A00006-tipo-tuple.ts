// não eziste no js puro tuple
const dadosClientes: readonly [number, string, ...string[]] = [1, 'luiz'];
dadosClientes[2] = 'tatt';
console.log(dadosClientes);

const dadosClientes2: [number, string?] = [1, 'luiz'];

dadosClientes2[0] = 1000;
dadosClientes2[1] = 'T1000';

console.log(dadosClientes2);
