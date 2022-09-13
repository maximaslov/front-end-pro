'use strict'

const quiz = [
    {
        question: 'Сколько будет 2+2?',
        answer: '4',
    },
    {
        question: 'Солнце встает на востоке?',
        answer: 'да',
    },
    {
        question: 'Сколько будет 5 / 0?',
        answer: 'Infinity',
    },
    {
        question: 'Какого цвета небо?',
        answer: 'голубого',
    },
    {
        question: 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»',
        answer: '42',
    }
]

let marks = []; 

startQuestionnaire();
totalMarks();

function startQuestionnaire() {
    quiz.forEach(e => getMarks(e.question, e.answer));
}

function getMarks(question, answer) {
    const res = prompt(question);
    if (res === answer) {
        addMarks();
    }
}

function addMarks() {
    marks.push(10);
}

function totalMarks() {
    let totalMarks = marks.reduce(function(acc, elem) {
        return acc + elem
    }, 0);
    
    showTotalMarks(totalMarks);
}

function showTotalMarks(totalMarks) {
    alert(`Вы получили ${totalMarks} баллов!`);
}