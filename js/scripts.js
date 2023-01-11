const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')


form.addEventListener('submit', (event) => {
  event.preventDefault()

  // Verifica se o nome está vazio
  if (nameInput.value === '') { 
    alert('Por favor, preencha o seu nome');
    return;
  }

  // verifica se o email está preenchido e se é válido.

  if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
    alert('Por favor, preencha com um email valido')
    return
  }

  // verificar se a senha está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    alert('A senha precisa de no mínimo 8 digitos.')
    return
  }

  // Verificar se a sitiuação foi selecionada
  if (jobSelect.value === '') {
    alert('Por favor, selecione a sua situação')
    return
  }
  // verifica se a mensagem está preenchida
  if (messageTextarea.value === '') {
    alert('Por favor, escreva sua mensagem')
    return
  }

  //se todos os campos estiverem devidamente preenchido enviar o formulário.
  form.submit();
});

//Função que valida e-mail
function isEmailValid(email) {
  //criar umaregex para validar e-mail
  const emailRegex = new RegExp(
    // uruario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if(emailRegex.test(email)) {
    return true;
  }
  return false;
}
// função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    // senha valida
    return true;
  }
  // senha inválidas
  return false;
}

