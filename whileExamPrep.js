function exam(input){
    let index = 0;
    let poorCounter = 0;
    let taskCouter = 0;
    let sumMarks = 0;
    let average = 0;
    let last = "";

    let numPoorMarks = Number(input[index]);
    index++

    let nameTask = input[index];
    index++

    let mark = Number(input[index]);
    index++

    while (nameTask !== "Enough"){
        last = nameTask
        if (mark <= 4){
            poorCounter++;
            if (poorCounter === numPoorMarks){
                console.log(`You need a break, ${poorCounter} poor grades.`);
                return;
            }
        }
        taskCouter++
        sumMarks += mark
        nameTask = input[index];
        index++
        mark = Number(input[index]);
        index++

       }
       average = sumMarks / taskCouter
       console.log(`Average: ${average.toFixed(2)}`)
       console.log(`Number of problems: ${taskCouter}`)
       console.log(`Last problem: ${last}`)
 
  }

exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])