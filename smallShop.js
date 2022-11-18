function shop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let total = 0;

    if (city === "Sofia"){

        if (product === "coffee"){
            total = quantity * 0.5
        } else if (product === "water"){
            total = quantity * 0.8
        } else if (product === "beer") {
            total = quantity * 1.2
        } else if (product === "sweets"){
            total = quantity * 1.45
        } else if (product === "peanuts"){
            total = quantity * 1.60
        }

       
    } else if (city === "Plovdiv") {

        if (product === "coffee"){
            total = quantity * 0.4
        } else if (product === "water"){
            total = quantity * 0.7
        } else if (product === "beer") {
            total = quantity * 1.15
        } else if (product === "sweets"){
            total = quantity * 1.3
        } else if (product === "peanuts"){
            total = quantity * 1.5
        }

    } else if (city === "Varna") {

        if (product === "coffee"){
            total = quantity * 0.45
        } else if (product === "water"){
            total = quantity * 0.7
        } else if (product === "beer") {
            total = quantity * 1.10
        } else if (product === "sweets"){
            total = quantity * 1.35
        } else if (product === "peanuts"){
            total = quantity * 1.55
        }

    }
    
    console.log(total)
}

shop(["coffee", "Varna", 2])