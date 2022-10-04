export default class PhotosApi {
    static URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

    static request(url = '', method = 'GET', body) {
        return fetch(PhotosApi.URL + url, {
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
        return PhotosApi
            .request(id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrive photo gallery');
            });
    }
}