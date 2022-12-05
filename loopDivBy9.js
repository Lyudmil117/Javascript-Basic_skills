function div9(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let suma = 0
    for (let n = number1; n < number2; n++){
        if (n % 9 == 0){
            suma += n
        }
    }
    console.log(`The sum: ${suma}`)
    for (let n = number1; n < number2; n++){
        if (n % 9 == 0){
            console.log(n)
        }
    }
}
div9(["100", "200"])