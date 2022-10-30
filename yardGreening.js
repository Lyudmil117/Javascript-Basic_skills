function Gardening(input){
    let meterPrice = Number(input[0]) * 7.61;
    let discount = meterPrice * 0.18
    let finalPrice = meterPrice - discount
    console.log("The final price is: " + finalPrice + " lv.")
    console.log("The discount is: " + discount + " lv.")
}

Gardening(["550"])