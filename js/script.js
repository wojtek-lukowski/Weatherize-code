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

document.querySelector('#heart').onclick = () => {
  var x = document.querySelector('#control')
  var y = document.querySelector('#empty')
  var z = document.querySelector('#full')
  console.log(x)
  console.log(y)
  console.log(z)
  if (x.className === 'unfaved') {
    document.querySelector('.fav').style.animationPlayState = "running"
    x.className += ' faved'
    y.className += ' full'
    z.className += ' heart'
    console.log('added to favs')
    console.log(x)
    console.log(y)
    console.log(z)
  } else {
    document.querySelector('.unfav').style.animationPlayState = "running"
    x.className = 'unfaved'
    console.log('removed from favs')
  }
}


/*
  {
  console.log("added to favs")
  document.querySelector('.fav').style.animationPlayState = "running"

console.log(h)
} else  {
  document.querySelector('.unfav').style.animationPlayState = "running"
}
}*/
