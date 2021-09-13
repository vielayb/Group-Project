fetch(
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });