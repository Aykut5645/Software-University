function movieRatings(input) {
    let index = 0;
    let movieCount = Number(input[index]);
    index++;

    let lowestRating = Number.MAX_SAFE_INTEGER;
    let highestRating = Number.MIN_SAFE_INTEGER;

    let startValue = 1;
    let totalRating = 0;

    let highestMovie = "";
    let lowestMovie = "";

    while (startValue <= movieCount) {

        let currentMovieName = input[index];
        index++;
        let currentMovieRating = Number(input[index]);
        index++;
        
        if (currentMovieRating > highestRating) {
            highestRating = currentMovieRating;
            highestMovie = currentMovieName;
        }

        if (currentMovieRating < lowestRating) {
            lowestRating = currentMovieRating;
            lowestMovie = currentMovieName;
        }

        totalRating += Number(currentMovieRating);
        startValue++;
    }

    let averageRating = totalRating / movieCount;

    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRatings([ '3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2' ]);