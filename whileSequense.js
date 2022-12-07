function sequence(input) {
    let number = Number(input[0]);
    let start = 1;


    console.log(start)
    while (start < number){
        start = (start * 2) + 1
        if (start <= number){
        console.log(start)
        }
    }
}
sequence(["17"])