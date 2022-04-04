let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPeson(
  fristName: string,
  lastName?: string,
): {
  fristName: string;
  lastName?: string;
} {
  return {
    fristName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

/*
Tipos de checação por typeof que  é por tipo usamos 'number'
se for pelo tipo remove typeof e e coloca o null enves do 'numer'
*/
