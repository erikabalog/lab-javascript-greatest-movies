// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

    const allDirectors= moviesArray.map(movie=>{
       return movie.director;
    });

    return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const spielbergMovies= moviesArray.map(movie=>{
       if (movie.director == "Steven Spielberg" && movie.genre == "Drama") {
          return movie;
   }
    const avarageScore= calculateAvarageMovieScore(moviesArray);
    console.log(avarageScore);
   });

   return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0) return 0;

    let movArray = moviesArray.filter((movie)=>{
        return movie.score;
    });

    let totalSum= movArray.reduce((acc, movie)=> {
        return acc + movie.score;
    }, 0);

    let avarage=totalSum/moviesArray.length;

    let roundedAvarage= Number(avarage.toFixed(2));
    return roundedAvarage;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies= movies.filter(movie => movie.genre.includes("Drama"));

    if(dramaMovies.length === 0) {
        return 0;
    }
    const totalScore= dramaMovies.reduce((acumulator, movie)=> {
        if(movie.score !== undefined) {
            return acumulator + movie.score;
        } else {
            return acumulator;
        }
    }, 0);
}
  const avarageScore = totalScore / dramaMovies.lenght;


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies= movies.slice().sort((a,b)=>{
        if(a.year === b.year){
            return a.titleCompare(b.title);
        }
        return a.year - b.year;
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titles= movies.map(movie=> movie.title);
    titles.sort();
    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
