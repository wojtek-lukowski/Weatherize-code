/*
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

  var lowerCase = /[a-z]/g;
  if (password.value.match(lowerCase)) {
    letter.classList.remove('invalid');
    letter.classLlist.add('valid');
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

  if (password.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
}
*/

document.querySelector('.toggle-hourly').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none') {
    document.querySelector('#ForecastHourly').style.display = 'flex';
    document.querySelector('#ForecastDaily').style.display = 'none';
    document.querySelector('#hourly-on').style.display = 'block';
    document.querySelector('#daily-on').style.display = 'none';
  }
}

document.querySelector('.toggle-daily').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none') {
    document.querySelector('#ForecastHourly').style.display = 'none';
    document.querySelector('#ForecastDaily').style.display = 'flex';
    document.querySelector('#hourly-on').style.display = 'none';
    document.querySelector('#daily-on').style.display = 'block';
  }
}

document.querySelector('.toggle-hourly1').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none') {
    document.querySelector('#ForecastHourly').style.display = 'flex';
    document.querySelector('#ForecastDaily').style.display = 'none';
    document.querySelector('#hourly-on').style.display = 'block';
    document.querySelector('#daily-on').style.display = 'none';
  }
}

document.querySelector('.toggle-daily1').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none') {
    document.querySelector('#ForecastHourly').style.display = 'none';
    document.querySelector('#ForecastDaily').style.display = 'flex';
    document.querySelector('#hourly-on').style.display = 'none';
    document.querySelector('#daily-on').style.display = 'block';
  }
}

document.querySelector('#empty').onclick = () => {
  document.querySelector('.fav').style.animationPlayState = "running";
  setTimeout(function() {
    document.querySelector('.unfav').style.animationPlayState = "paused";
    document.querySelector('#empty').style.display = 'none';
    document.querySelector('#full').style.display = 'inline';
    alert('Location added to favorites.');
    console.log('Added to favs');
  }, 1000);
  console.log('animation fav');
}

document.querySelector('#full').onclick = () => {
  document.querySelector('.unfav').style.animationPlayState = "running";
  setTimeout(function() {
    document.querySelector('.fav').style.animationPlayState = "paused";
    document.querySelector('#full').style.display = 'none';
    document.querySelector('#empty').style.display = 'inline';
    alert('Location removed from favorites.');
    console.log("Removed from favs");
  }, 500);
  console.log('animation unfav');
}

      document.querySelector('#location').onsubmit = function() {
          var search = document.querySelector('#search').value;
          document.querySelector('h3').innerHTML = search;
          console.log(search);
        }

          /*
          var search = document.querySelector('#search').onsubmit;
          document.querySelector('#location').onsubmit = () => {
            document.querySelector('h3').innerHTML = search;
            console.log(search);
          };*/
