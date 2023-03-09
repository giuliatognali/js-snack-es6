'use strict';

const studentsList = [
    {
        id: 213,
        name: 'Marco della Rovere',
        TotalSum: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        TotalSum: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        TotalSum: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        TotalSum: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        TotalSum: 68
    },
    {
        id: 102,
        name: 'iero della Francesca',
        TotalSum: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        TotalSum: 84
    },
]

console.log(studentsList);

const studentsListUpperCase = studentsList.map((element) => {
    return element.name.toUpperCase()
});

//lista nomi maiuscoli
console.log(studentsListUpperCase);

const stundetsListgrades70 = studentsList.filter((element) => {
    if (element.TotalSum > 70) {
        return true;
    }
}).map(element => element.name);  //concatenare filter e map! 

//lista studenti voti > 70
console.log(stundetsListgrades70);


const stundetsListgrades70Id120 = studentsList.filter((element) => {
    if (element.TotalSum > 70 && element.id > 120) {
        return true;
    }
}).map((element) => {
    return element.name;
});

//lista studenti voti > 70 e id > 120
console.log(stundetsListgrades70Id120);


//soluzione definitiva!!!
const NewstundetsListgrades70Id120 = studentsList.filter(element => element.TotalSum > 70 && element.id > 120).map(element => element.name); 

console.log(NewstundetsListgrades70Id120);