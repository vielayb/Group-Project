fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=fcce2b5c2f58b9fb122efde3fc3fca79"
)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

   

