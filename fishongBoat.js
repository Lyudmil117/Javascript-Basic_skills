function boat(input){
    let budjet = Number(input[0]);
    let season = input[1];
    let numPeople = Number(input[2]);
    let rent = 0;
    let discount = 0;
    let totalToPay = 0;

    if (season == "Spring"){
        rent = 3000;
        if (numPeople <= 6){
            totalToPay = rent * 0.9
        } else if (numPeople <= 11){
            totalToPay = rent * 0.85
        } else if (numPeople > 12){
            totalToPay = rent * 0.75
        }
        if (numPeople % 2 == 0){
            totalToPay = totalToPay * 0.95
        }
    } else if (season == "Summer"){
        rent = 4200;
        if (numPeople <= 6){
            totalToPay = rent * 0.9;            
        } else if (numPeople <= 11){
            totalToPay = rent * 0.85;
        } else if (numPeople > 12){
            totalToPay = rent * 0.75
        }
        if (numPeople % 2 == 0){
            totalToPay = totalToPay * 0.95
        }
    } else if (season == "Autumn"){
        rent = 4200;
        if (numPeople <= 6){
            totalToPay = rent * 0.9
        } else if (numPeople <= 11){
            totalToPay = rent * 0.85
        } else if (numPeople > 12){
            totalToPay = rent * 0.75
        }
    } else if (season == "Winter"){
        rent = 2600;
        if (numPeople <= 6){
            totalToPay = rent * 0.9
        } else if (numPeople <= 11){
            totalToPay = rent * 0.85
        } else if (numPeople > 12){
            totalToPay = rent * 0.75 
        }
        if (numPeople % 2 == 0){
            totalToPay = totalToPay * 0.95
        }
    }

    if (totalToPay > budjet){
        console.log(`Not enough money! You need ${(totalToPay - budjet).toFixed(2)} leva.`)
    } else {
        console.log(`Yes! You have ${(budjet - totalToPay).toFixed(2)} leva left.`)
    }
        
}

boat(["3000", "Summer", "11"])