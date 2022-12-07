function min(input){
    let number = input[0];
    let lowest = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while (number !== "Stop"){
        let currentNumber = Number(number);
        if (currentNumber < lowest){
            lowest = currentNumber
        }
        
        number = input[index];
        index++          
    }
    console.log(lowest)
}
min(["100",
"99",
"80",
"70",
"Stop"])