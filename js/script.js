function toggle() {
  var x = document.getElementById('hourly');
  if (x.className === 'active') {
    x.className += ' default';
  } else {
    x.className = 'active';
  }
}

/*
function weatherDisplay() {
  var x = document.getElementById('weatherForecast');
  if (x.className === 'hourly') {
    x.className += ' daily';
  } else {
    x.className = 'hourly';
  }
}


/*
function display() {
  var x = document.getElementById('hourly');
  if (x.className === 'default') {
    x.className += ' active';
  } else {
    x.className = 'default';
  }
}
*/
