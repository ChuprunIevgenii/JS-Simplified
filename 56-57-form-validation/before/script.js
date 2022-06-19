// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#password-confirmation')
const terms = document.querySelector('#terms')
const errorsList = document.querySelector('.errors-list')
const errorsContainer = document.querySelector('.errors')

form.addEventListener('submit', e => {
  const errors = [];

  if(username.value.length < 6)                     errors.push('Ensure the username is at least 6 characters long')
  if(password.value.length < 10)                    errors.push('Ensure the password is at least 10 characters long')
  if(password.value !== passwordConfirmation.value) errors.push('Ensure the password and confirmation password match')
  if(!terms.checked)                                errors.push('Ensure the terms checkbox is checked');
  
  if(errorsList.children.length) clearErrors();

  if(errors.length) {
    showErrors(errors);
    e.preventDefault()
  } 
})

function clearErrors() {
    
  while(errorsList.children.length) {
    console.log(errorsList.children[errorsList.children.length - 1]);
    errorsList.children[errorsList.children.length - 1].remove();
  }
  
  errorsContainer.classList.remove('show');
}

function showErrors(errorMessages) {
  console.log('errorMessages', errorMessages);
  errorMessages.forEach(errorMesg => {
    const li = document.createElement('li');
    li.innerText = errorMesg;
    errorsList.appendChild(li);
  })
  
  errorsContainer.classList.add('show');
}
