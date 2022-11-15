// tomato, cucumber, pepper и carrot



function fruitOrVeg(input){
    let fruitOrVeg = input[0];  // тук трябва да същото като горе "fruitOrVeg" иначе не работи
    switch (fruitOrVeg){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");break;

        default: console.log("unknown");break
        
    }
}

fruitOrVeg(["apple"])