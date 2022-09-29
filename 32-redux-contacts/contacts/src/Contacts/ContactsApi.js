export default class ContactsApi {
    static URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/contacts/';

    static request(url = '', method = 'GET', body) {
        return fetch(ContactsApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
        .catch((e) => {
            throw new Error(`TodoApi can not execure request: ${e.message}`);
        });
    }

    static getList() {
        return ContactsApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrive todo list');
            });
    }

    static create(contact) {
        return ContactsApi
            .request('', 'POST', contact)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error('Can not create new todo');
            });
    }

    static delete(id) {
        return ContactsApi
            .request(id, 'DELETE')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error(`Can not delete todo with id "${id}"`);
            });
    }
    
    static update(id, contact) {
        return ContactsApi
            .request(id, 'PUT', contact)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error(`Can not update todo with id "${id}"`);
            });
    }
    }