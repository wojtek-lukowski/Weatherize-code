var password = document.querySelector('#password');
var capital = document.querySelector('#capital');
var letter = document.querySelector('#letter');
var length = document.querySelector('#length');
var number = document.querySelector('#number');

password.onfocus = () => {
  document.querySelector('#message').style.display = 'block';
}

password.onblur = () => {
  document.querySelector('#message').style.display = 'none';
}

password.onkeyup = () => {

  if (password.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }

  var lowerCase = /[a-z]/g;
  if (password.value.match(lowerCase)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  var upperCase = /[A-Z]/g;
  if (password.value.match(upperCase)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }
}
