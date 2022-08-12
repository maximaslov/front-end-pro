'use strict'

const TODO_ITEM_CLASS = ('.todoitem');
const DELETE_BTN_CLASS = ('.deletebtn');

const input = document.querySelector('.list__text');
const button = document.querySelector('.list__btn');
const todoList = document.querySelector('.list__items');

button.addEventListener('click', onButtonClick);
todoList.addEventListener('click', onTodoListClick);
todoList.addEventListener('click', onDeleteButtonClick)

function onButtonClick() {
    addTodoItem(input.value);
}

function addTodoItem(listItem) {

    const toDoItem = addTemplateHTML(listItem);
    if (isValidValue(listItem)) {
        todoList.insertAdjacentHTML('beforeend', toDoItem)
    }

    clearInput(input);
}

function addTemplateHTML(message) {
    return `<li class="todoitem">
        <span>${message}</span>
        <button class="deletebtn">Delete</button>
    </li>
    `;
}

function isValidValue(anyInput) {
    return anyInput !== '';
}

function clearInput(anyInput) {
    anyInput.value = '';
}

function onTodoListClick(e) {
    const todoItem = getTodoItem(e.target);
    if (todoItem) {
        if (e.target.classList.contains('deletebtn')) {
            return;
        }
        todoItem.classList.toggle('green');
        }
}

function getTodoItem(el) {
    return el.closest(TODO_ITEM_CLASS);
}

function onDeleteButtonClick(e) {
    const deleteButton = getDeleteButton(e.target);
    if (deleteButton) {
        deleteButton.parentElement.remove();
    }
}

function getDeleteButton(el) {
    return el.closest(DELETE_BTN_CLASS);
}

