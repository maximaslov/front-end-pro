'use strict'

const inputName = document.querySelector('.contacts__nameinput');
const inputLastName = document.querySelector('.contacts__lastnameinput');
const inputPhoneNum = document.querySelector('.contacts__phoneinput');
const button = document.querySelector('.contacts__btn');
const ul = document.querySelector('.contacts__items');
const contact = document.querySelector('#contactTemplate');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    isDataValid() ? getList() : showError();
}

function isDataValid() {
    return getName() !== ''
        && isNaN(getName())
        && getLastName() !== ''
        && isNaN(getLastName())
        && getPhoneNumber() !== ''
        && !isNaN(getPhoneNumber());
}

function getList() {
    const list = generateContact();
    ul.insertAdjacentHTML('beforeend', list);
    clearInputs();
}

function generateContact() {
    const list = contact.innerHTML.replace('{name}', getName())
        .replace('{lastname}', getLastName())
        .replace('{number}', getPhoneNumber());
    return list;
}

function showError() {
    alert('Input data is incorrect');
}

function getName() {
    return inputName.value;
}

function getLastName() {
    return inputLastName.value;
}

function getPhoneNumber() {
    return inputPhoneNum.value;
}

function clearInputs() {
    inputName.value = '';
    inputLastName.value = '';
    inputPhoneNum.value = '';
}