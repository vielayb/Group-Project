fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=fcce2b5c2f58b9fb122efde3fc3fca79"
)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

   
//     fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
// 		"x-rapidapi-key": "70461e1ed8mshe24dfc99ab92ee2p14e7e2jsn62d271d2b794"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// information about this movie
//budget
//title
//overview