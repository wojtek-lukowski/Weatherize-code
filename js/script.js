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

document.querySelector('#empty').onclick = () => {
  if (document.querySelector('#empty').style.display = 'inline') {
    document.querySelector('.fav').style.animationPlayState = "running"
    document.querySelector('#empty').style.display = 'none'
    document.querySelector('#full').style.display = 'inline'
    console.log('added to favs')
  } else {
    document.querySelector('.unfav').style.animationPlayState = "running"
    console.log('removed from favs')
  }
}

document.querySelector('#full').onclick = () => {
  document.querySelector('.unfav').style.animationPlayState = "running"
  document.querySelector('#full').style.display = 'none'
  document.querySelector('#empty').style.display = 'inline'
  console.log("Removed from favs")
}
