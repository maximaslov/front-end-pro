export default class StudentsMarksApi {
    static URL = 'https://62e3ccc8b54fc209b8912174.mockapi.io/api/students/'

    static request() {
        return fetch(this.URL).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can`t get Todo list");
        });
    }

        static deleteStudent(id) {
            return fetch(this.URL + id, {
                method: 'DELETE'
            })
            .catch((e) => alert(e.message));
    }

    static updateMark(id, marks) {
        return fetch(this.URL + id, {
            method: 'PUT',
            body: JSON.stringify({ marks }),
            headers: {
                'Content-type': 'application/json',
            }
        })
        .catch((e) => alert(e.message));
    }

    static postNewStudent(student) {
        return fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not create new todo');
            })
    }
}
