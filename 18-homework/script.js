'use strict'

const URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/contacts/';
const CONTACT_CLASS = 'contact';
const DELETE_BTN_CLASS = 'contact-del-btn';
const EDIT_BTN_CLASS = 'contact-edit-btn';

const contactListEl = document.querySelector('.contacts__items');
const inputName = document.querySelector('#form__name');
const inputLastName = document.querySelector('#form__lastname');
const inputNumber = document.querySelector('#form__number');
const contactForm = document.querySelector('#contacts__form');

contactForm.addEventListener('submit', onContactFormSubmit);
contactListEl.addEventListener('click', onContactListClick);

getContactList().then(renderContactList);

function onContactFormSubmit(e) {
    e.preventDefault();
    if (isDataValid()) {
        const contact = getContact();

        createContact(contact)
            .then(newContact => {
                renderContactItem(newContact);
                clearForm();
            });
    } else {
        alert('Enter correct data!')
    }
}

function isDataValid() {
    return firstName() !== ''
        && isNaN(firstName())
        && lastName() !== ''
        && isNaN(lastName())
        && number() !== ''
        && !isNaN(number());
}

function getContact() { 
    return {
        firstname: firstName(),
        lastname: lastName(),
        number: number(),
    };
}

function getContactList() {
    return fetch(URL).then(res => res.json());
}

function createContact(contact) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(contact),
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

function onContactListClick(e) {
    const elem = e.target;
    const el = elem.parentElement;
    const id = elem.parentElement.dataset.id;

    if (elem.classList.contains(EDIT_BTN_CLASS)) {
        const firstName = el.children[0].dataset.id;
        const lastName = el.children[1].dataset.id;
        const number = el.children[2].dataset.id;
        editContact(id, firstName, lastName, number);
    }
        if (elem.classList.contains(DELETE_BTN_CLASS)) {
            removeContactElem(id);
        }
}

function editContact(id, firstname, lastname, number) {
    alert(`:(
    Я не понял как отредактировать контакт
    id: ${id}, 
    firsname: ${firstname}, 
    lastname: ${lastname}, 
    number: ${number}
    `);
}

function removeContactElem(id) {
    return fetch(URL + id, {
        method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            const deletedElement = contactListEl.querySelector(`[data-id="${id}"]`);
            deletedElement.remove();
        }
    })
}

function getContactItem(el) {
    return el.closest(CONTACT_CLASS);
}

function renderContactList(list) {
    const html = list.map(generateContactHtml).join('');

    contactListEl.insertAdjacentHTML('beforeend', html);
}

function renderContactItem(contact) {
    const contactTemplateHTML = generateContactHtml(contact);

    contactListEl.insertAdjacentHTML('beforeend', contactTemplateHTML);
}

function generateContactHtml(contact) {
    const firstname = contact.firstname;
    const lastname = contact.lastname;
    const number = contact.number;
    const id = contact.id;
    return `
         <li class="contact" data-id="${id}">
            <p class="first-name contact-item" data-id="${firstname}">${firstname}</p>
            <p class="last-name contact-item" data-id="${lastname}">${lastname}</p>
            <p class="phone-number contact-item" data-id="${number}">${number}</p>
            <button class="contact-edit-btn">Edit</button>
            <button class="contact-del-btn">Delete</button>
        </li>
    `;
}

function clearForm() {
    contactForm.reset();
}

function firstName() {
    return inputName.value;
}

function lastName() {
    return inputLastName.value;
}

function number() {
    return inputNumber.value;
} 