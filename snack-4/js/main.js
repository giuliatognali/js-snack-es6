'use strict';

//funzione per generazione di numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
const min = 0;
const max = 99;

//lista squadre (array di oggetti)
const teamList = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
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

});
console.log(ValuesList);

// nuovoa lista contentente solo name e points
const TeamFouls = ValuesList.map((element) => {
    const {name, points} = element;
    return {name, points};

});
console.log(TeamFouls);