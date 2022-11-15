function personalTitle(input){
    let age = Number(input[0]);
    let person = input[1];
    

    if (person == "m"){
        if (age >= 16){
        console.log("Mr.")
    } else {
        console.log("Master")
    } 
}
else if (person == "f"){
    if (age >= 16){
        console.log("Ms.")
    } 
    else {
        console.log("Miss")
    }
}
}

personalTitle([11, "f"])