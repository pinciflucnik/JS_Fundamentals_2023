function movies(input) {
    let moviesArr = [];
    function getMovieNames(moviesArr){
        let arrOfNames = [];
        for (el of moviesArr){
            arrOfNames.push(el.name);
        }
        return arrOfNames;
    }
    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(" ");

        if (tokens[0] === "addMovie"){
            tokens.shift();
            let movieName = tokens.join(" ");
            let movie = {
                name: movieName
            }
            moviesArr.push(movie);
        } else {
            if (input[i].includes("directedBy")){
                tokens = input[i].split(" directedBy ");
                let movieNames = getMovieNames(moviesArr);
                let indexInArr = movieNames.indexOf(tokens[0]);
                if (indexInArr > -1){
                    moviesArr[indexInArr].director = tokens[1];
                }
            }
            else if (input[i].includes('onDate')){
                tokens = input[i].split(" onDate ");
                let movieNames = getMovieNames(moviesArr);
                let indexInArr = movieNames.indexOf(tokens[0]);
                if (indexInArr > -1){
                    moviesArr[indexInArr].date = tokens[1];
                }

            }
        }
    }
    
    for (el of moviesArr){
        let toPrint = JSON.stringify(el);
        if(toPrint.includes("director") && toPrint.includes(`date`)){
            console.log(toPrint);
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
console.log("---DIVIDER---");
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);