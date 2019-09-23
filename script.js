let numberOfPizzas = 10
let numberOfRows = 10
let pizzas = ''
for (let i=0; i<numberOfRows;i++) {
    for(let i=0; i<numberOfPizzas; i++) {
        pizzas += "🍕"
    }
    pizzas += "\n"
}
console.log(pizzas)
//pizzas script above in a 10x10 square


let numberOfX = 1
let numberOfRows = 8
let x = ''
for (let i=0; i<numberOfRows; i++) {
    for (let i=0; i<numberOfX; i++) {
        x +="X"
    }
    numberOfX += 1
    x += "\n"
    }
    console.log(x)

//script for second question adding 1 per row


let numberOfw = 8
let numberOfRows = 8
let w = ''
for (let i=0; i<numberOfRows; i++) {
    for (let i=0; i<numberOfw; i++) {
        w +="w"
    }
    numberOfw -= 1
    w += "\n"
    }
    console.log(w)

    //decending order on second question