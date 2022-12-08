function books(input){
    let theBook = input[0];
    let nextBook = input[1];
    let counter = 0;
    index = 2;
    
    while (nextBook !== theBook){
        nextBook = input[index];
        counter++
        index++
        if (nextBook === "No More Books"){
            console.log("The book you search is not here!")
            console.log(`You checked ${counter} books.`)
            break;
        }
        
    }
    if (nextBook === theBook){
    console.log(`You checked ${counter} books and found it.`)
    }
}
books(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
