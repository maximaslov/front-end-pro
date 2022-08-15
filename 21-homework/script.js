'use strict'

const URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/contacts/';
const CONTACT_CLASS = 'contact';
const DELETE_BTN_CLASS = 'contact-del-btn';
const EDIT_BTN_CLASS = 'contact-edit-btn';
const MODAL_SELECTOR = '#contactModal';
const FORM_ID_SELECTOR = '#form__id';
const FORM_NAME_SELECTOR = '#form__name';
const FORM_LASTNAME_SELECTOR = '#form__lastname';
const FORM_NUMBER_SELECTOR = '#form__number';


const $inputName = $(FORM_NAME_SELECTOR);
const $inputLastName = $(FORM_LASTNAME_SELECTOR);
const $inputNumber = $(FORM_NUMBER_SELECTOR);
const $inputId = $(FORM_ID_SELECTOR);
const $contactList = $('.contacts__items');
const $contactForm = $('#contacts__form');
const $newContatBtn = $('#form__button');
const $dialogForm = $('#contactModal');

let contactList = [];

getContactList()
    .then((list) => {
        contactList = list;
        renderContactList(list);
    })

$newContatBtn.on('click', onContactFormSubmit);
$contactList
    .on('click', '.' + DELETE_BTN_CLASS, onDelBtnClick)
    .on('click', '.' + EDIT_BTN_CLASS, onEditBtnClick);

function getContact() {
    return {
        firstname: firstName(),
        lastname: lastName(),
        number: number(),
        id: id(),
    };
}

const $form = $(`${MODAL_SELECTOR} form`)[0];
const $modal = $($dialogForm).dialog({
    autoOpen: false,
    modal: true,
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "explode",
        duration: 1000
    },
    buttons: {
        "Save": addContact,

        Cancel: closeModal,
    },
        close: closeModal,
});
    
function addContact() {
    if (isDataValid()) {
        const id = $(FORM_ID_SELECTOR).val();
        
        if (id === '') {
            const contact = getContact();
            createContact(contact)
                .then(newContact => {
                    renderContactItem(newContact);
                    contactList.push(newContact);
                });
        } else {
            const contact = getContact();
            editContactElem(contact)
                .then(contact => {
                    const index = contactList.findIndex((el) => el.id === contact.id);
                    contactList.splice(index, 1, contact);
                    const li = $(`.${CONTACT_CLASS}`)[index];
                    $(li).replaceWith(generateContactHtml(contact));
            })
        }
        clearForm();
        closeModal();
        
    } else {
        alert('Enter correct data!');
    }
    
}

function onContactFormSubmit(e) {
    e.preventDefault();
    openModal();
    clearForm();
}

function onDelBtnClick() {
    const $delBtn = $(this);
    const id = $delBtn.parent().data('id');
    removeContactElem(id);
    contactList = contactList.filter(el => el.id !== `${id}`);
}

function removeContactElem(id) {
    return ContactsApi.deleteElement(id);
}

function onEditBtnClick() {
    const $editBtn = $(this);
    const $elem = $editBtn.parent();
    const id = $elem.data('id');
    
    const contact = contactList.find(el => el.id === `${id}`)

    openModal();
    $($form).find(FORM_NAME_SELECTOR).val(contact.firstname);
    $($form).find(FORM_LASTNAME_SELECTOR).val(contact.lastname);
    $($form).find(FORM_NUMBER_SELECTOR).val(contact.number);
    $($form).find(FORM_ID_SELECTOR).val(id);
    
}

function isDataValid() {
    return firstName() !== ''
        && isNaN(firstName())
        && lastName() !== ''
        && isNaN(lastName())
        && number() !== ''
        && !isNaN(number());
}

function getContactList() {
    return ContactsApi.request();
}

function createContact(contact) {
    return ContactsApi.postNewElement(contact);
}

function editContactElem(contact) {
    return ContactsApi.editElement(contact)
}

function getContactItem(el) {
    return el.closest(CONTACT_CLASS);
}

function renderContactList(list) {
    const html = list.map(generateContactHtml).join('');

    $contactList.append(html);
}

function renderContactItem(contact) {
    const contactTemplateHTML = generateContactHtml(contact);

    $contactList.append(contactTemplateHTML);
}

function generateContactHtml(contact) {
    const firstname = contact.firstname;
    const lastname = contact.lastname;
    const number = contact.number;
    const id = contact.id;
    return `
         <li class="contact" data-id="${id}">
            <p class="first-name contact-item">${firstname}</p>
            <p class="last-name contact-item">${lastname}</p>
            <p class="phone-number contact-item">${number}</p>
            <button class="btn contact-edit-btn">Edit</button>
            <button class="btn contact-del-btn">Delete</button>
        </li>
    `;
}

function clearForm() {
    $contactForm[0].reset();
}

function closeModal() {
    $modal.dialog('close');
    clearForm();
}

function openModal() {
    $modal.dialog('open')
}

function firstName() {
    return $inputName.val();
}

function lastName() {
    return $inputLastName.val();
}

function number() {
    return $inputNumber.val();
} 

function id() {
    return $inputId.val();
}