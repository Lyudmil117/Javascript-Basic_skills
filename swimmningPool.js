function worldRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let totalTime = distance * time;
    let resistanceDstance = Math.floor(distance / 15);
    let resistance = (resistanceDstance* 12.5);
    let totalSwim = totalTime + resistance

    if (currentRecord <= totalSwim){
        console.log(`No, he failed! He was ${(totalSwim - currentRecord).toFixed(2)} seconds slower.`)
        } else {
            console.log(` Yes, he succeeded! The new world record is ${(totalSwim).toFixed(2)} seconds.`)
        } 
}

worldRecord(["55555.67", "3017", "5.03"])