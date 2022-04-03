// Array <T> T[]

export function multiplicaArgs(...arges: Array<number>): number {
  return arges.reduce((ac, valor) => ac * valor);
}
console.log(multiplicaArgs(5, 5));

//concatena estrings

export function concatenaStrings(...arges: Array<string>): string {
  return arges.reduce((ac, val) => ac + val);
}
console.log(concatenaStrings('a', 'b', 'c'));

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
console.log(toUpperCase('ta', 'ci', 'sio'));
