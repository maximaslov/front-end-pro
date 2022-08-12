'use strict'

const question = [
    'Сколько будет 2+2?',
    'Солнце встает на востоке?',
    'Сколько будет 5 / 0?',
    'Какого цвета небо?',
    'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»'
];

const answer = ['4', 'да', 'Infinity', 'голубого', '42'];

let marks = []; 

for (let i = 0; i < question.length; i++) {
    getMarks(question[i], answer[i]);
}

let totalMarks = marks.reduce(function(acc, elem) {
    return acc + elem
}, 0);

function getMarks(question, answer) {
    const res = prompt(question);
    if (res === answer) {
        marks.push(10);
    }
}

alert(`Вы получили ${totalMarks} баллов!`)