function sumLetters (input){
    let word = input[0];
    let a = 1;
    let e = 2;
    let i = 3
    let o = 4
    let u = 5
    let suma = 0
    
    for (let x = 0; x < word.length; x++){
        index = x
        if (word[index] == "a"){
            suma += 1
        } else if (word[index] == "e"){
            suma += 2
        } else if (word[index] == "i"){
            suma += 3
        } else if (word[index] == "o"){
            suma += 4
        } else if (word[index] == "u"){
            suma += 5
        }
    }
    console.log(suma)
}
sumLetters(["hello"])