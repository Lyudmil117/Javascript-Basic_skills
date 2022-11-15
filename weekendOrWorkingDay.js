function calendar(input){
    let dayOfWeek = input[0];
    switch (dayOfWeek){
        case "Monday":   //  може да не се пише навсякъде console.log, защото това последното ще важи
        case "Tuesday":  // за всичките до FRIDAY
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day");break;
        case "Saturday":
        case "Sunday": console.log("Weekend");break;
        default: console.log("Error")
    }
}

calendar(["Monday"])