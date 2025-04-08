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

// mark movie as watched/unwatched

function markAsWatched(movieid) {
  let movie = movies.find(muvie => muvie.id === movieid);
  if (movie) {
    movie.watched = !movie.watched;
    console.log("Movie watch:", movie);
  } else {
    console.log("Movie not found");
  }
}
markAsWatched(1);
markAsWatched(2);

// List by genre or watched status
// function listByGenre(genre) {
//   let filtered = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
//   console.log(`Movies in genre "${genre}":`, filtered);
// }


// list by  watched status

function listByWatchedStatus(isWatched) {
  const filtered = movies.filter(movie => movie.watched === isWatched);
  const status = isWatched ? "Watched" : "Unwatched";
  console.log(`${status} Movies:`, filtered);
}
listByGenre("animation");
listByGenre("action");
listByGenre("comedy");

function sortByYear() {
  movies.sort((a, b) => a.year-b.year);
  console.log("Movies sorted by year:", movies);
}
sortByYear(movies);

// function deleteMovie(movieid) {
//   movies = movies.filter(movie => movie.id !== movieid);
//   console.log(`Movie with ID ${movieid} deleted.`);
// }
// deleteMovie(1); 


function deleteMovie(movieid) {
  movies = movies.filter(movie => movie.id !== movieid);
  console.log(`Movie with ID ${movieid} deleted.`);
  console.log("Updated movie list:", movies);
}
deleteMovie(1);