function gratuate(input){
    let failed = 0;
    let sumMarks = 0;
    let name = input[0];
    let index = 1;
    let mark = Number(input[index]);
    let years = 0;

    while(years <= 12){
        mark = Number(input[index])
        if (mark >= 4){
            sumMarks += mark;
        } else {
            failed += 1;
            if (failed === 2){
                console.log(`${name} has been excluded at ${years} grade`)
                break;
            }
        }
        years++
        index++
    }  
    if (failed < 2){
        console.log(`${name} graduated. Average grade: ${(sumMarks/12).toFixed(2)}`)      
}   
}
gratuate (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
