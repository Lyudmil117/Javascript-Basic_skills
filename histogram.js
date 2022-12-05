function histogram(input) {
    let numsCount = Number(input[0]);
    let currentNumber = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    

    for (let i = 1; i <= numsCount; i++){
        currentNumber = Number(input[i]);
        if (currentNumber < 200){
            p1++
        } else if (currentNumber < 400){
            p2++
        } else if (currentNumber < 600){
            p3++
        } else if (currentNumber < 800){
            p4++
        } else if (currentNumber >= 800){
            p5++
        }
    } 
    let group1 = (p1 / numsCount) * 100
    let group2 = (p2 / numsCount) * 100
    let group3 = (p3 / numsCount) * 100
    let group4 = (p4/ numsCount) * 100
    let group5 = (p5 / numsCount) * 100

    console.log(`${group1.toFixed(2)}%`)
    console.log(`${group2.toFixed(2)}%`)
    console.log(`${group3.toFixed(2)}%`)
    console.log(`${group4.toFixed(2)}%`)
    console.log(`${group5.toFixed(2)}%`)
}
histogram(["3", "1", "2", "999"])