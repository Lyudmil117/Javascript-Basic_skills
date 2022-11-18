function workingTime(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (day === "Monday" ||day === "Tuesday" ||day === "Wednesday" ||day === "Thursday"|| day === "Friday"||day === "Saturday"){
       
        if (10 <= time && time <= 18){
            console.log("open")           
        } else {
            console.log("closed")
        }
    } else if (day === "Sunday"){
        console.log("closed")
    }
}

workingTime([11, "Sunday"])