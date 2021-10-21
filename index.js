// Code your solutions in this file

// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         debugger
//     }
//     return gifts;
// }

function writeCards(names, event){
    let card = []
    for(let i = 0; i < names.length; i++){
        card[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return card
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts){
    let i = 0
    while(i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++
    }
    return gifts;
}

function countDown(number){
    let i = 0
    while(number >= i){
        console.log(number)
        number--
    }
    return number
}