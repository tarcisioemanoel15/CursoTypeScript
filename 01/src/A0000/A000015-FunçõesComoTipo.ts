/*
function mapStrings(array: string[], callbakfn: CallableFunction): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbakfn(array[i]));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function (item: any) {
  return item.toUpperCase();
});
console.log(abc);
console.log();
console.log(abcMapped);
*/

// Tipando

type MapStringsCallbak = (item: string) => string;

function mapStrings(array: string[], callbakfn: MapStringsCallbak): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbakfn(item));
    // newArray.push(callbakfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function (item: any) {
  return item.toUpperCase();
});

console.log(abc);
console.log();

console.log(abcMapped);
