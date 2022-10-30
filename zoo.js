function zooShop(input){
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let priceDog = 2.50 * dog
    let priceCat = 4 * cat;
    let total = priceCat + priceDog;
    console.log(total + " lv.")
}

zooShop(["5", "4"])
