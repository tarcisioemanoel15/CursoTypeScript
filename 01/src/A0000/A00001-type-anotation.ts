/*O comentario abaixo desativa*/

/* eslint-disable */

//Tipos básicos (aqui ocorre inferência de tipos)

let nome: string = 'Tarcisio'; //qualquer tipo de estring:'' "" ``
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true uo false
let simbolo: symbol = Symbol('qualquer-symol'); // symbol
// let big: bigint = 10n; //bigint


// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];

let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

//Obetos

let pessoa: {nome:string, idade:number, adulto?:boolean} = {
  idade: 30,
  nome: 'Tarcisio'
}



// Funções
function soma(x:number, y:number): number  {
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;
