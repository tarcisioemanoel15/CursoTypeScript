// Não utilizar
// utilizar any em apenas ultimo caso

function showMessage(msg: any) {
  return msg;
}
console.log(showMessage('oii'));
console.log(showMessage([1, 2, 3, 4, 5]));
console.log(showMessage('z' + 1));

// Usando any não da reo em praticamente nada
