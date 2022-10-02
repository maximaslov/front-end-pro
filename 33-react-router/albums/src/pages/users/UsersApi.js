export default class UsersApi {
    static URL = ' https://jsonplaceholder.typicode.com/users/';

    static request(url = '', method = 'GET', body) {
        return fetch(UsersApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
            .catch((e) => {
                throw new Error(`UsersApi can not execure request: ${e.message}`);
            });
    }

    static getList() {
        return UsersApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrive users list');
            });
    }
}