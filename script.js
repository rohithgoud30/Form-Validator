const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input error messages
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.textContent = message
}

//Show input success
const showSuccess = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//Email Validation
const checkEmail = (input) => {
  if (
    !String(input.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    showError(input, 'Email is not valid')
  } else {
    showSuccess(input)
  }
}

// Check Required Feilds
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFeildName(input.id)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFeildName(input.id)} must be atleast ${min} Characters.`
    )
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFeildName(input.id)} must be lessthan ${max} Character.`
    )
  } else {
    showSuccess(input)
  }
}

const getFeildName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

//Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 3, 25)
  checkEmail(email)
})
