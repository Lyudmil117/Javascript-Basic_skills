function oscar(input){
    let name = input[0];
    let points = Number(input[1]);
    let numJudjes = Number(input[2]);

    for (let i = 3; i < input.length; i += 2){
        let judgeName = input[i];
        let newPoints = Number(input[i + 1]);

        let result = (judgeName.length * newPoints) /2;
        points += result;
    
        if (points > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
            return;
    }
}
    console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`)
    
}
oscar(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])