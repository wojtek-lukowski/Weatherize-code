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
