function trip(input){
    let budjet = Number(input[0]);
    let season = input[1];
    let destination = ""
    let moneyLeft = 0
    let where = ""
    if (budjet <= 100){
        destination = "Bulgaria";
        if (season == "summer"){
            where = "Camp"
            moneyLeft = budjet * 0.3
        } else if (season == "winter"){
            where = "Hotel"
            moneyLeft = budjet * 0.7
        }
    } else if (budjet <= 1000){
        destination = "Balkans"
        if (season == "summer"){
            moneyLeft = budjet * 0.4
            where = "Camp"
        } else if (season == "winter"){
            where = "Hotel"
            moneyLeft = budjet * 0.8
        }
    } else if (budjet > 1000){
        destination = "Europe";
        where = "Hotel"
        moneyLeft = budjet * 0.9
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${where} - ${moneyLeft.toFixed(2)}`)
}

trip(["75", "winter"])