/*document.querySelector('.switch').onclick = function () {
  var x = document.getElementById('hourly')
  var y = document.getElementById('daily')
  if (x.style.color = 'white') {
    x.style.color = '#a3a3a3'
    y.style.color = 'white'
  } else {
    x.style.color = 'white'
    y.style.color = '#a3a3a3'
  }
}*/

document.querySelector('.switch').onclick = function() {
  var x = document.getElementById('hourly')
  var y = document.getElementById('daily')
  if (x.className = 'active') {
    x.className = ' default'
    y.className = ' active'
  } else {
    x.className = 'active'
    y.className = 'default'
  }
}

document.querySelector('.fav').onclick = function() {
  if (document.querySelector('#heart').style.display = 'inline') {
    document.querySelector('#heart').style.display = 'none'
    document.querySelector('#heart-full').style.display = 'inline'
    console.log('added to favs')
  } else {
  document.querySelector('#heart-full').style.display = 'none'
  document.querySelector('#heart').style.display = "inline"
console.log('Removed from favs')}
}
