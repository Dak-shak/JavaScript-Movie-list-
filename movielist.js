// Add a movie
// Mark as watched/unwatched
// List by genre or watched status
// Delete movie
// Sort by year or title

let movies = [];

function addMovie(title, genre, year) {
  let movieid = movies.length + 1;
  let newMovie = {
    id: movieid,
    title: title,
    genre: genre,
    year: year,
    watched: false
  };
  movies.push(newMovie); 
  console.log("Movie added:", newMovie);
}
addMovie("The Avengers", "Action", 2012);
addMovie("The Lion King", "Animation", 1994);
addMovie("Mr Bones", "comedy", 2010);