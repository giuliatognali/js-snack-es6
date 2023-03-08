'use strict';
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]

const nomeTavolo = 'Tavolo Vip';
//console.log(guests);


//Nuova lista da inviare 
const guestList = guests.map((element, index) => {
    return {
        'nome del tavolo': nomeTavolo,
        'nome ospite': element,
        'posto occupato': (index + 1)
    }
});

console.log(guestList)