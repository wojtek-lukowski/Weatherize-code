document.querySelector('.toggle-hourly').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none'){
    document.querySelector('#ForecastHourly').style.display = 'flex'
  document.querySelector('#ForecastDaily').style.display = 'none'
  document.querySelector('#hourly-on').style.display = 'block'
  document.querySelector('#daily-on').style.display = 'none'
}
}

document.querySelector('.toggle-daily').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none'){
    document.querySelector('#ForecastHourly').style.display = 'none'
  document.querySelector('#ForecastDaily').style.display = 'flex'
  document.querySelector('#hourly-on').style.display = 'none'
  document.querySelector('#daily-on').style.display = 'block'
}
}

document.querySelector('.toggle-hourly1').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none'){
    document.querySelector('#ForecastHourly').style.display = 'flex'
  document.querySelector('#ForecastDaily').style.display = 'none'
  document.querySelector('#hourly-on').style.display = 'block'
  document.querySelector('#daily-on').style.display = 'none'
}
}

document.querySelector('.toggle-daily1').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none'){
    document.querySelector('#ForecastHourly').style.display = 'none'
  document.querySelector('#ForecastDaily').style.display = 'flex'
  document.querySelector('#hourly-on').style.display = 'none'
  document.querySelector('#daily-on').style.display = 'block'
}
}

document.querySelector('#empty').onclick = () => {
  // document.querySelector('.fav').style.animationPlayState = "running"
  document.querySelector('#empty').style.display = 'none'
  document.querySelector('#full').style.display = 'inline'
  setTimeout(function() {
    alert('Location added to favorites.')
    console.log('Added to favs')
  }, 100);
  console.log('animation fav')
}

document.querySelector('#full').onclick = () => {
  // document.querySelector('.unfav').style.animationPlayState = "running"
  document.querySelector('#full').style.display = 'none'
  document.querySelector('#empty').style.display = 'inline'
  setTimeout(function() {
    document.querySelector('#full').style.display = 'none'
    document.querySelector('#empty').style.display = 'inline'
    alert('Location removed from favorites.')
    console.log("Removed from favs")
  }, 100);
  console.log('animation unfav')
}
