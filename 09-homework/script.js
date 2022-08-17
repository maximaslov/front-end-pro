'use strict'

const input = document.querySelector('.list__text');

const button = document.querySelector('.list__btn');

const ul = document.querySelector('.list__items');

button.addEventListener('click', generateList);

function generateList() {
    let li = document.createElement('li');
    if (input.value !== '') {
        li.innerText = input.value;
        input.value = '';
        ul.append(li);
    }
}

