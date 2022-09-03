import './style.css';
import messageTemplate from './messageTemplate.html'

const chat = document.querySelector('.messages');
const informArea = document.querySelector('.info');
const username = document.querySelector('.username');
const message = document.querySelector('.message');
const saveBtn = document.querySelector('.button');

let socket;

initConection();

saveBtn.addEventListener('click', onSaveBtnClick);

function onSaveBtnClick() {
    socket.send(JSON.stringify({
        message: message.value,
        username: username.value,
    }));
}

function initConection() {
    socket = new WebSocket('wss://fep-app.herokuapp.com');  
}

socket.onopen = () => {
    informArea.append('Connection completed');
}

socket.onclose = () => {
    informArea.append('Connection lost');
    initConection();
}

socket.onmessage = (e) => {
    const data = JSON.parse(e.data)
    try {
        addMessageToPage(data)
    } catch (e) {
        console.log('Error' + e);
    }
}

function addMessageToPage(data) {
    const html = template(data)
    chat.insertAdjacentHTML('afterbegin', html)
}

function template(data) {
    const name = data.username;
    const message = data.message;

    return messageTemplate
        .replace('{{name}}', name)
        .replace('{{message}}', message)
}