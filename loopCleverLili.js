function lili(input){
    let age = Number(input[0]);
    let priceMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let evenMoney = 10
    let totalMoney = 0
    let stolen = 0;
    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            totalMoney += evenMoney;
            evenMoney += 10
            stolen += 1
        } else {
            totalMoney += toyPrice; 
        }
    }
    totalMoney = totalMoney - stolen
    if (totalMoney >= priceMachine){
        console.log(`Yes! ${(totalMoney - priceMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceMachine - totalMoney).toFixed(2)}`)
    }
}
lili(["10", "170.00", "6"])