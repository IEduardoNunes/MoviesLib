function showMovies() {
  d('.area-movies').innerHTML = '';
  for(let i in results) {
    let clone = d('.film').cloneNode(true);
    clone.querySelector('#click').addEventListener('click', () => {
      if(clone.querySelector('.description').style.opacity == '1') {
        clone.querySelector('.description').style.opacity = '0';
        clone.querySelector('#click').innerHTML = 'Overview';
      }else if(clone.querySelector('.description').style.opacity = '0') {
        clone.querySelector('.description').style.opacity = '1';
        clone.querySelector('#click').innerHTML = 'Hide';
      }
    })
    clone.querySelector('.area-img').style.backgroundImage = `url(${IMG_URL + results[i].poster_path})`
    clone.querySelector('.area-img').style.backgroundPosition = 'center';
    clone.querySelector('.area-img').style.backgroundSize = 'cover' 
    clone.querySelector('.description').innerHTML = results[i].overview;
    clone.querySelector('h3').innerHTML = results[i].title;
    clone.querySelector('span').innerHTML = results[i].vote_average.toFixed(1)+'⭐';

    d('.area-movies').append(clone);
  }
}

d('header img').addEventListener('click', () => {
  if(d('header .search').value) {
    getMovies(SEARCH_URL+'&query='+d('header .search').value);
    d('header .search').value = '';
  }else {
    getMovies(API_URL)
  }
});
d('.search').addEventListener('keyup', (event) => {
  if(event.key == 'Enter') {
    if(d('header .search').value) {
      getMovies(SEARCH_URL+'&query='+d('header .search').value);
      d('header .search').value = '';
    }else {
      getMovies(API_URL)
    }
  }
})
d('header h1').addEventListener('click', () => {
  getMovies(API_URL);
  d('header .search').value = '';
});