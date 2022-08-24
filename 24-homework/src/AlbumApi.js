class AlbumApi {
    static LIST_API = 'https://jsonplaceholder.typicode.com/albums/';
    static ALBUMS_API = 'https://jsonplaceholder.typicode.com/photos?albumId=';

    static request(url, id) {
        return fetch(url + id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error();
            })
        }
}
