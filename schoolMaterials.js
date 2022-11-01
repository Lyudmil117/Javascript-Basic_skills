function calculate(input){
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let cleaner = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;
    let total = (pens + markers + cleaner) - (pens + markers + cleaner) * discount;
    console.log(total);
}

calculate(["2", "3", "4", "25"]);