'use strict'

const INPUT_NAME_CLASS = ('contacts__nameinput');
const INPUT_LASTNAME_CLASS = ('contacts__lastnameinput');
const INPUT_PHONE_CLASS = ('contacts__phoneinput');
const SAVE_BTN_CLASS = ('contacts__save-btn');
const DEL_BTN_CLASS = ('contacts__del-btn');
const CONTATCS_LIST_CLASS = ('contacts__items');
const CONTACT_TEMPLATE_SELECTOR = ('contactTemplate');
const CONTACT_CLASS = ('contact');

const inputName = document.querySelector('.'+ INPUT_NAME_CLASS);
const inputLastName = document.querySelector('.'+ INPUT_LASTNAME_CLASS);
const inputPhoneNum = document.querySelector('.'+ INPUT_PHONE_CLASS);
const saveButton = document.querySelector('.'+ SAVE_BTN_CLASS);
const contactList = document.querySelector('.' + CONTATCS_LIST_CLASS);
const contactTemplate = document.querySelector('#' + CONTACT_TEMPLATE_SELECTOR);

saveButton.addEventListener('click', onSaveButtonClick);
contactList.addEventListener('click', onContactListClick);

function onSaveButtonClick() {
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
    const contactItem = generateContact();
    contactList.insertAdjacentHTML('beforeend', contactItem);
    clearInputs();
}

function generateContact() {
    const newContact = contactTemplate.innerHTML.replace('{name}', getName())
        .replace('{lastname}', getLastName())
        .replace('{number}', getPhoneNumber());
    return newContact;
}

function showError() {
    alert('Input data is incorrect');
}

function onContactListClick(e) {
    const btn = e.target;
    const contact = btn.closest('.' + CONTACT_CLASS);
    
    removeContact(btn, contact)
}

function removeContact(btn, contact) {
    if (btn.classList.contains(DEL_BTN_CLASS)) {
        contact.remove()
    }
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