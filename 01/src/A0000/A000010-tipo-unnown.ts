// unknown é a mesma coisa que o any só que mais seguro

let x: unknown;

x = 100;
x = 'tar';
x = '500';

const y = 400;

if (typeof x === 'number') console.log(x + y);
