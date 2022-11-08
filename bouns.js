function bonus(input){
    let number = Number(input[0]);
    let bonus = 0;
    if (number <= 100) {
        bonus += 5;
    } else if (1000 > number && number > 100) {  // така тия пишат AND - §§
        bonus += number * 0.2;
    } else if (number > 1000) {
        bonus += number * 0.1;
    }
    
    if (number % 2 === 0) {
        bonus += 1
    }
    if (number % 10 === 5) { // ako едно число се дели модулно на 10 и == 5, то то завършва на 5
        bonus += 2
    }
    console.log(bonus)
    console.log(number + bonus)
}

bonus(["175"]);