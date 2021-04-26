
function toggle() {
  var x = document.getElementById('forecast');
  if (x.className === 'hourly') {
    x.className += ' daily';
  } else {
    x.className = 'hourly';
  }
}

/*
function toggleDaily() {
  var x = document.getElementById('toggle-daily');
  if (x.className === 'default') {
    x.className += ' active';
  } else {
    x.className = 'default';
  }
}
*/
