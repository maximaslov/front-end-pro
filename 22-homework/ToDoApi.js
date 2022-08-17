class TodoApi {
    static URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/todo/';

    static getList() {
        return fetch(this.URL).then((res) => {
            if (res.ok) {
            return res.json();
        }

        throw new Error("Can`t get Todo list");
        });
    }

    static getOne(id) {
        return fetch(this.URL + id).then((res) => {
            if (res.ok) {
            return res.json();
        }

        throw new Error(`Can't get Todo with id '${id}'.`);
        });
    }

    static create(todo) {
        return fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json',
            },
            }).then((res) => {
                if (res.ok) {
                return res.json();
            }

            throw new Error("Can't create new Todo");
            });
    }

    static update(id, status) {
        return fetch(this.URL + id, {
            method: 'PUT',
            body: JSON.stringify({ status }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't update Todo");
        });
    }

    static delete(id) {
        return fetch(this.URL + id, {
            method: 'DELETE',
            }).then((res) => {
                if (res.ok) {
                return res.json();
            }

        throw new Error(`Can't delete Todo`);
        });
    }
}