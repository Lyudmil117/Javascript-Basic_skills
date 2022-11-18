function cinema(input) {
    let day = input[0];
    let price = 0
    if (day === "Monday"){
        price = 12
    } else if (day === "Tuesday"){
        price = 12
    } else if (day === "Wednesday"){
        price = 14
    } else if (day === "Thursday"){
        price = 14
    } else if (day === "Friday"){
        price = 12
    } else if (day === "Saturday"){
        price = 16
    } else if (day === "Sunday"){
        price = 16
    }
    console.log(price)
}

cinema(["Monday"])