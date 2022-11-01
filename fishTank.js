function tank(input){
    let height = Number(input[0]);
    let widht = Number(input[1]);
    let lenght = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let aquarium = (height * lenght * widht) / 1000;
    let total = aquarium - (aquarium * percent);
    console.log(total)
}

tank(["85", "75", "47", "17"])