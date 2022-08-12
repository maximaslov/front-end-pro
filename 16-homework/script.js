'use strict'

const input = document.querySelector('.input');
const getUserBtn = document.querySelector('.button');
const userList = document.querySelector('.user_list');

getUserBtn.addEventListener('click', onGetUserBtnClick);

function onGetUserBtnClick() {
    getUser();
    clearInput();
}

function getUser() {
    fetch(`https://api.github.com/users/${login()}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`User is not found`);
        })
        .then(user => addUser(user))
        .catch(error => alert(error.message));
}

function login() {
    return input.value;
}

function addUser(user) {
        userList.insertAdjacentHTML('afterbegin', generateUsersList(user));
}

function generateUsersList(user) {
    return `
    <li class="user">
        <img class="avatar" src="${user.avatar_url}" alt="avatar">
        <p><span>Login:</span> ${user.login}</p>
        <p><span>Repositories:</span> ${user.public_repos}</p>
        <p><span>Followers:</span> ${user.followers}</p>
        <p><span>Follownig:</span> ${user.following}</p>
    </li>
    `;
}

function clearInput() {
    input.value = '';
}

