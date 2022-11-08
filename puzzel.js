function puzzle(input){
    let excursion = Number(input[0]);
    let puzz = Number(input[1]); //* 2.60;
    let dolls = Number(input[2]); //* 3;
    let bears = Number(input[3]); //* 4.10;
    let minions = Number(input[4]); //* 8.20;
    let trucks = Number(input[5]); //* 2;
    let totalToys = puzz + dolls + bears + minions + trucks;
    let money = (puzz*2.60) + (dolls*3) + (bears * 4.10) + (minions*8.20)+(trucks*2);
    
    if (totalToys >= 50) {
        money = money - (money * 0.25);
        rent = money - (money * 0.9);
        total = money - rent;
        
    } else {
        money = money;
        rent = money - (money *0.9);
        total = money - rent;
    }

    if (excursion > total){
        console.log(`Not enough money! ${(excursion - total).toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${(total - excursion).toFixed(2)} lv left.`);
    }
}

puzzle(["40.8", "20", "25", " 30", "50", "10"]);