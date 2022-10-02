export default class AlbumsApi {
    static URL = 'https://jsonplaceholder.typicode.com/albums?userId=';

    static request(url = '', method = 'GET', body) {
        return fetch(AlbumsApi.URL + url, {
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

    static getList(id) {
        return AlbumsApi
            .request(id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrive albums list');
            });
    }
}