function cakes(input){
    let index = 0;
    let x = Number(input[index]);
    index++
    let y = Number(input[index]);
    index++
    let take = input[index];
    index++
    let cakeSize = x * y

    while (take !== "STOP"){

        take = Number(take);
        cakeSize -= take;
        
        if (cakeSize <= 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            return;
        }
        take = input[index];
        index++
    }
    console.log(`${cakeSize} pieces are left.`)

}

cakes[("10",
"2",
"2",
"4",
"6",
"STOP")]