function div9(input){
    let n = input[0];
    let suma = 0

    for (let i=0; i < n.length; i+=1){
        index = i
        suma += Number(n[index]) // обърни внимание,че тук трябва да го обърнеш в число, а не горе. Защото иначе не
    }                               // може да се използва n.lengh
    console.log(`The sum of the digits is:${suma}`)
}
div9(["1234"])