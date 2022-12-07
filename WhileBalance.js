function balance(input){
    let deposit = input[0];
    let index = 1;
    let total = 0;

    while (deposit !== "NoMoreMoney"){
        moneyPut = Number(deposit);
        if (moneyPut < 0){
            console.log(`Invalid operation!`);
            break;
        } 
        total += moneyPut;
        console.log(`Increase: ${moneyPut.toFixed(2)}`)
        
        deposit = input[index];
        index++
    }
    console.log(`Total: ${total.toFixed(2)}`)      
}
balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])