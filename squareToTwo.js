function square(input) {
    let n = Number(input[0]);

    for(let x = 0; x <= n; x++){

        if(x % 2 === 0){
            let answer = Math.pow(2, x);
            console.log(answer);
        }       
    }
}

square(["3"])