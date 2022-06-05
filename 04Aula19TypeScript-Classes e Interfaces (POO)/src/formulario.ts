import { isEmail } from 'validator';

const show_error_messages = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;

const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSenfForm(target)) console.log('formulario enviado'); // form.submit();
});

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem');
    showErrorMessage(password2, 'Senhas não batem');
  }
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email invaliddo');
}

function checkForEmptyFields(...input: HTMLInputElement[]): void {
  input.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + show_error_messages)
    .forEach((item) => item.classList.remove(show_error_messages));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(show_error_messages);
}

// showErrorMessage(username, 'MENSAGEM');
// hideErrorMessages(form);

function shouldSenfForm(form: HTMLElement): boolean {
  let send = true;

  form.querySelectorAll('.' + show_error_messages).forEach(() => {
    send = false;
  });
  return send;
}
