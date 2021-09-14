fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=fcce2b5c2f58b9fb122efde3fc3fca79&query=the+croods"
)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
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

                    var posterPath = infoObject.poster_path;
                    var titlePath = infoObject.title;
                    var overviewPath = infoObject.overview;
                    

                    var posterDivEl = document.querySelector("#poster");
                    // posterDivEl.innerHTML = "";
                    var moviePoster = document.createElement("img");
                    moviePoster.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + posterPath);
                    posterDivEl.appendChild(moviePoster);
                });
    });

