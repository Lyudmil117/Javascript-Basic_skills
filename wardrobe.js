function wardrobe(input){
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit = ""
    let shoes = ""

    if (timeOfTheDay ==="Morning"){
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (18 < degrees && degrees <= 24){
            outfit = 'Shirt';
            shoes = "Moccasins";
        } else if (25 <= degrees){
            outfit = "T-Shirt";
            shoes = "Sandals"
        }
    } else if (timeOfTheDay === "Afternoon"){
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (18 < degrees && degrees <= 24){
            outfit = 'T-Shirt';
            shoes = "Sandals";
        } else if (25 <= degrees){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }

    } else if (timeOfTheDay === "Evening"){
        if (degrees >= 10 && degrees <= 18){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (18 < degrees && degrees <= 24){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (25 <= degrees){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

wardrobe(["12", 'Morning'])