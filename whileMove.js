function mover(input){
    let index = 0;
    let x = Number(input[index]);
    index++
    let y = Number(input[index]);
    index++
    let z = Number(input[index]);
    index++
    let kubMetersSpace = x * y * z
    let baggage = input[index];
    index++

    while (baggage !== "Done"){
        baggage = Number(baggage);
        kubMetersSpace -= baggage;

        if (kubMetersSpace <= 0){
            console.log(`No more free space! You need ${Math.abs(kubMetersSpace)} Cubic meters more.`);
            return;
    }
    baggage = input[index];
    index++
    }
    console.log(`${kubMetersSpace} Cubic meters left.`)
}    
    
mover(["10", 
"1",
"2",
"4", 
"6",
"Done"])