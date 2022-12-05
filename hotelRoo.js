function calculate(input){
    let month = input[0];
    let numNights = Number(input[1]);
    let totalStudio = 0;
    let totaApartment = 0;

    if (month == "May" || month == "October"){
        totaApartment = 65 * numNights
        if (numNights > 7){
            totalStudio = (numNights * 50) * 0.95 
        } else {
            totalStudio = 50 * numNights
        }
        if (numNights > 14){
            totalStudio = (50 * numNights) * 0.7
            totaApartment = (numNights * 65) * 0.9
        }

    } else if (month == "June" || month == "September"){
        totaApartment = numNights * 68.70
        totalStudio = numNights * 75.20

       if (numNights > 14){
        totalStudio = (numNights * 75.20) * 0.8
        totaApartment = (numNights * 68.70) * 0.9
       }
    } else if (month == "July" || month == "August"){
        
        if (numNights > 14){
            totaApartment = (numNights * 77) * 0.9
            totalStudio = numNights * 76
        } else {
            totaApartment = numNights * 77
            totalStudio = numNights * 76
        }
    }
    console.log(`Apartment: ${totaApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`)
}
calculate(["August", "20"])