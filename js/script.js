document.querySelector('.toggle-hourly').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none')
    document.querySelector('#ForecastHourly').style.display = 'flex'
  document.querySelector('#ForecastDaily').style.display = 'none'
  document.querySelector('#hourly-on').style.display = 'block'
  document.querySelector('#daily-on').style.display = 'none'
}

document.querySelector('.toggle-daily').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none')
    document.querySelector('#ForecastHourly').style.display = 'none'
  document.querySelector('#ForecastDaily').style.display = 'flex'
  document.querySelector('#hourly-on').style.display = 'none'
  document.querySelector('#daily-on').style.display = 'block'
}

document.querySelector('.toggle-hourly1').onclick = function() {
  if (document.querySelector('#ForecastHourly').style.display = 'none')
    document.querySelector('#ForecastHourly').style.display = 'flex'
  document.querySelector('#ForecastDaily').style.display = 'none'
  document.querySelector('#hourly-on').style.display = 'block'
  document.querySelector('#daily-on').style.display = 'none'
}

document.querySelector('.toggle-daily1').onclick = () => {
  if (document.querySelector('#ForecastDaily').style.display = 'none')
    document.querySelector('#ForecastHourly').style.display = 'none'
  document.querySelector('#ForecastDaily').style.display = 'flex'
  document.querySelector('#hourly-on').style.display = 'none'
  document.querySelector('#daily-on').style.display = 'block'
}

var x = document.querySelector('.fav')
x.style.animationPlayState = 'paused'
document.queryselector('.heart').onclick = () => {
  console.log("added to favs")
  x.style.animationPlayState = 'running'
}


/*
document.querySelector('.fav').onclick = function() {
  if (document.querySelector('#heart').style.display = 'inline') {
    document.querySelector('#heart').style.display = 'none'
    document.querySelector('#heart-full').style.display = 'inline'
    console.log('added to favs')
  } else {
  document.querySelector('#heart-full').style.display = 'none'
  document.querySelector('#heart').style.display = "inline"
console.log('Removed from favs')}
}*/
