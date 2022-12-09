function walk(input){
    let index = 0;
    let target = 10000;
    let currentSteps = 0;
    let moreSteps = input[index];
    index++
    while (moreSteps !== "Going home"){
        moreSteps = Number(moreSteps);
        currentSteps += moreSteps;
        if (currentSteps >= target){
            console.log(`Goal reached! Good job! ${currentSteps - target} steps over the goal!`)
        }
        moreSteps = input[index];
        index++;
    }
    let stepsGiveUp = Number(input[index])
    let needed = target - (stepsGiveUp + currentSteps);
    console.log(`${Math.abs(needed)} more steps to reach goal.`)   

}
walk(["125",
"250",
"4000",
"30",
"2678",
"4682"])

