function calculator(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0
    let more = ""
    if (operator == "+"){
        result = num1 + num2
        if (result % 2 == 0){
            more = "even"
        } else {
            more = "odd"
        }
        console.log(`${num1} + ${num2} = ${result} - ${more}`)

    } else if (operator == "-"){
        result = num1 - num2
        if (result % 2 == 0){
            more = "even"
        } else{
            more = "odd"
        }
        console.log(`${num1} - ${num2} = ${result} - ${more}`)

    } else if (operator == "*"){
        result = num1 * num2
        if (result % 2 == 0){
            more = "even"
        } else{
            more = "odd"
        }
        console.log(`${num1} * ${num2} = ${result} - ${more}`)

    } else if (operator == "/"){
        if (num2 == 0){
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            result = num1 / num2
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
        }
    } else if (operator == "%"){
        if (num2 == 0){
            console.log(`Cannot divide ${num1} by zero`)
        } else {
        result = num1 % num2
        console.log(`${num1} % ${num2} = ${result}`)
    }
}
}
calculator(["7", "3", "*"])