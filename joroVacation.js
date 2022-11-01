function joro(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2])
    let calculate = (pages / pagesPerHour) / days
    console.log(calculate)
}

joro(["212", "20", "2"])