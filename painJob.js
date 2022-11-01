function paint(input){
    let nylon = (Number(input[0]) + 2) * 1.50;
    let paint = ((Number(input[1]) * 1.1) * 14.50);
    let razreditel = Number(input[2]) * 5.00;
    let hoursWork = Number(input[3]);
    let bags = 0.40;
    let totalMaterials = nylon + paint + razreditel + bags;
    let workerWages = (totalMaterials * 0.3) * hoursWork;
    let total = totalMaterials + workerWages
    console.log(total)
}

paint(["10","11", "4", "8"])