function lunchBreak(input) {
    let film = input[0];
    let durration = Number(input[1]);
    let freeTime = Number(input[2]);

    let eat = (1 /8) * freeTime
    let rest = (1 /4) * freeTime
    let totalSlack = durration + eat + rest

    if (freeTime >= totalSlack){
        console.log(`You have enough time to watch ${film} and left with ${Math.ceil(freeTime - totalSlack)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${film}, you need ${Math.ceil(totalSlack - freeTime)} more minutes.`)
    }
}
lunchBreak(["dfsd", "60", "96"])