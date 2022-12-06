function treking(input){
    let numPeople = Number(input[0]);
    let countAllPeople = 0;
    let mussala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= numPeople; i++){
        currentPeople = Number(input[i])
        countAllPeople += currentPeople
        if (currentPeople <= 5){
            mussala += currentPeople;
        } else if (currentPeople <= 12){
            monblan += currentPeople
        } else if (currentPeople <= 25){
            kilimanjaro += currentPeople
        } else if (currentPeople <= 40){
            k2 += currentPeople
        } else if (countAllPeople > 41){
            everest += currentPeople
        }
    }
    p1 = (mussala / countAllPeople) * 100
    p2 = (monblan / countAllPeople) * 100
    p3 = (kilimanjaro / countAllPeople) * 100
    p4 = (k2 / countAllPeople) * 100
    p5 = (everest / countAllPeople) * 100
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
}

treking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])