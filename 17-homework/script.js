'use strict'

const URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/todo/';
const TODO_ITEM_CLASS = 'todo__item';
const DELETE_BTN_CLASS = 'todo__del-btn';

const todoList = document.querySelector('.todo__list');
const input = document.querySelector('#form__input');
const todoForm = document.querySelector('#todo__form');

todoForm.addEventListener('submit', onTodoFormSubmit);
todoList.addEventListener('click', onTodoListClick);

getTodoList().then(renderTodoList);

function onTodoFormSubmit(e) {
    e.preventDefault();

    const todo = getTodo();

    createTodo(todo)
        .then(newTodo => {
            renderTodoItem(newTodo);
            clearForm();
        });
}

function getTodo() {
    return {
        title: input.value,
        status: false,
    };
}

function getTodoList() {
    return fetch(URL).then(res => res.json());
}

function createTodo(todo) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not create new todo');
    })
}

function onTodoListClick(e) {
    const elem = e.target;
    const id = elem.dataset.id;
    if (elem.classList.contains('done')) {
        changeTodoElemStatus(id, false);
    } else {
        changeTodoElemStatus(id, true)
    }
   
   if (elem.classList.contains(DELETE_BTN_CLASS)) {
       const id = elem.parentElement.dataset.id
       removeTodoElem(id);
   }
}

function changeTodoElemStatus(id, status) {
    fetch(URL + id, {
        method: 'PUT',
        body: JSON.stringify({ status }),
        headers: {
            'Content-type': 'application/json',
        }
    }).then(res => {
        if (res.ok) {
            const changeStatusEl = todoList.querySelector(`[data-id="${id}"]`);
            changeStatusEl.classList.toggle('done')
        }
    });
}

function removeTodoElem(id) {
    return fetch(URL + id, {
        method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            const deletedElement = todoList.querySelector(`[data-id="${id}"]`);
            deletedElement.remove();
        }
    })
}

function getTodoItem(el) {
    return el.closest(TODO_ITEM_CLASS);
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('');

    todoList.insertAdjacentHTML('beforeend', html);
}

function renderTodoItem(todo) {
    const todoItemTemplateHTML = generateTodoHtml(todo);

    todoList.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
}

function generateTodoHtml(todo) {
    const status = todo.status ? 'done' : '';
    const id = todo.id ? todo.id : '';
    return `
        <li class="todo__item ${status}" data-id="${id}">
            <span>${todo.title}</span>
            <button class="todo__del-btn">Delete</button>
        </li>
    `;
}

function clearForm() {
    todoForm.reset();
}