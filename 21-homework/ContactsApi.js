class ContactsApi {
    static URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/contacts/';

    static request() {
        return fetch(this.URL)
        .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error();
        })
    }

    static postNewElement (contact) {
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
                throw new Error();
            })
    }

    static deleteElement (id) {
        return fetch(URL + id, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok) {
                const $deletedElement = $(`[data-id="${id}"]`);
                $deletedElement[0].remove();
            }
        })
    }
    
    static editElement(contact) {
        const firstname = contact.firstname;
    const lastname = contact.lastname;
    const number = contact.number;
    const id = contact.id;
        return fetch(URL + id, {
            method: 'PUT',
            body: JSON.stringify({ firstname, lastname, number }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error();
            })
}
    }