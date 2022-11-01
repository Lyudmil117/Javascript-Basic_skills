function gear(input){
    let moneyPerYear = Number(input[0]);
    let shoes = moneyPerYear * 0.6;
    let clothes = shoes * 0.8;
    let ball = clothes * 0.25;
    let other = ball * 0.2;
    let total = moneyPerYear + shoes + clothes + ball + other;
    console.log(total);
}

gear(["365"])
