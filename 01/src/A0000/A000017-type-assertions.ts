const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLELEMENT
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'asdfghj,.';
input.focus();

//Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
