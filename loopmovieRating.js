function movie(input){
    let bestRating = Number.MIN_SAFE_INTEGER;
    let worstRating = Number.MAX_SAFE_INTEGER;
    let numFilms = Number(input[0]);
    let bestMovie = "";
    let currentFilm = "";
    let worstMovie = "";
    let currentRating = 0;
    let sumRating = 0;
    let average = 0;

    for (let i=1; i < input.length;){
        currentFilm = input[i];
        i++
        currentRating = Number(input[i]);
        i++
        sumRating += currentRating;

        if (currentRating > bestRating){
            bestRating = currentRating;
            bestMovie = currentFilm;
        }
        if (currentRating < worstRating){
            worstRating = currentRating;
            worstMovie = currentFilm;
        }
    
    }
     average = sumRating / numFilms
     console.log(`${bestMovie} is with highest rating: ${bestRating.toFixed(1)}`)
     console.log(`${worstMovie} is with lowest rating: ${worstRating.toFixed(1)}`)
     console.log(`Average rating: ${average.toFixed(1)}`)
}
movie(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
