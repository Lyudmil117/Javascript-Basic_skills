function max(input){
    let number = input[0];
    let greatest = Number.MIN_SAFE_INTEGER;
    let index = 1;

    while (number !== "Stop"){
        let currentNumber = Number(number);
        if (currentNumber > greatest){
            greatest = currentNumber
        }
        
        number = input[index];
        index++          
    }
    console.log(greatest)
}
max(["-10",
"20",                              
"-30",
"Stop"])