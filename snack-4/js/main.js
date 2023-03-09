'use strict';

//funzione per generazione di numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
const min = 0;
const max = 99;

let newPoints = randomNum(min, max);
console.log(newPoints);
let newFouls = randomNum(min, max);
console.log(newFouls);

//lista squadre (array di oggetti)
const teamList = [
    {
        nome: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Lazio',
        points: 0,
        fouls: 0
    }

]

console.log(teamList);

//nuova lista con valori random di fouls e points
const ValuesList = teamList.map((element) => {
    let newPoints = randomNum(min, max);
    let newFouls = randomNum(min, max);
    element.points = newPoints;
    element.fouls = newFouls;
    return element;

})

console.log(ValuesList);