function foodDelivery(input){
    let chickMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegieMenu = Number(input[2]) * 8.15;
    let delivery = 2.50;
    let dessert = (chickMenu + fishMenu + vegieMenu) * 0.20
    let total = chickMenu + vegieMenu + fishMenu + delivery + dessert
    console.log(total)
}

foodDelivery