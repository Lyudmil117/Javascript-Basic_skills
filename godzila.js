function godzila(input){
    let budjet = Number(input[0]);
    let statists = Number(input[1]);
    let priceGear = Number(input[2]);
    let decor = budjet * 0.1;
    if (statists > 150){
        priceGear = priceGear * 0.9
    }

    let moneyWaste = priceGear * statists + decor
 

    if (budjet < moneyWaste) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(moneyWaste - budjet).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budjet - moneyWaste).toFixed(2)} leva left.`)
    }
}

godzila(["20000", "120", "55.5"])