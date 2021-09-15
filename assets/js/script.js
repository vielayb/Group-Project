var inputValue = document.querySelector('.inputValue')
var key = 'fcce2b5c2f58b9fb122efde3fc3fca79'
var movieName = document.querySelector('.movieName')
var rating = document.querySelector('.rating')
var overview = document.querySelector('.overview')
var release = document.querySelector('.release')
var iframe = document.getElementById("trailer");
function getMovie(event) {
  event.preventDefault();
  var search = inputValue.value
  fetch('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&query=' + search + '')
    
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        var name = data.results[0].title
        movieName.innerHTML = name
        var ratingScore = data.results[0].vote_average
        rating.innerHTML = ratingScore
        var overviewEl = data.results[0].overview
        overview.innerHTML = overviewEl
        var releaseDateEl = data.results[0].release_date
        release.innerHTML = releaseDateEl
        // my code
                //path to movie id
                var movieId = data.results[0].id;
                console.log(movieId);
                //results for more information including path to YouTube Trailer
                return fetch(
                    "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=fcce2b5c2f58b9fb122efde3fc3fca79&append_to_response=videos"
                )
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(infoObject) {
                            console.log(infoObject);

                            var trailerPath = infoObject.videos.results[0].key;
                            console.log(trailerPath);

                            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + trailerPath +'');
                        });
    });

  
  }

document.querySelector('.submitBtn').addEventListener('submit', getMovie)