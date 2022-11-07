function area(input){
    let figure = input[0];
    
    if (figure === "square"){
        let a = Number(input[1]);
        let result = a * a;
        console.log(result)
    } else if (figure === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = a * b;
        console.log(result)
    } else if (figure === "circle") {
        let a = Number(input[1]);
        let result = Math.PI * a * a;
        console.log(result)
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = (a * b) / 2;
        console.log(result)
    }
}   

area(["square", "4"])