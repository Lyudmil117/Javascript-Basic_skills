function sum(input){
    let finalNum = Number(input[0]);
    let number = Number(input[1]);
    let index = 1;
    let finalSum = 0;

    while(finalSum < finalNum){
        number = Number(input[index])
        finalSum += number
        index++
    }
    console.log(finalSum)
}
sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
