function depositCalculator(input){
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);
    let total = deposit + period * ((deposit * percent / 100) / 12)
    console.log(total)
}

depositCalculator(["200", "3", "5.7"])