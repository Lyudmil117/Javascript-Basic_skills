 function tennis(input){
    let numberTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let newPoints = 0;
    let tour = "";
    let wonTournaments = 0;

    for (let i = 2; i <= input.length; i++){
        tour = input[i];
        if (tour === "W"){
            newPoints += 2000;
            wonTournaments += 1;
        } else if (tour === "F"){
            newPoints += 1200;
        } else if (tour === "SF"){
            newPoints += 720;
        }
    }
    let totalPoints = newPoints + initialPoints
    let average = newPoints / numberTournaments
    let averageTourWon = (wonTournaments / numberTournaments) * 100
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(average)}`)
    console.log(`${averageTourWon.toFixed(2)}%`)

 }
 tennis(["5",
 "1400",
 "F",
 "SF",
 "W",
 "W",
 "SF"])