import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllItems() {
    return await api.get(api.settings.host + '/data/movies');
}

export async function getItemDetails(id) {
    return await api.get(api.settings.host + '/data/movies/' + id);
}

export async function createItem(data) {
    return await api.post(api.settings.host + '/data/movies', data);
}

export async function deleteItem(id) {
    return await api.del(api.settings.host + '/data/movies/' + id);
}

export async function updateItem(id, data) {
    return await api.put(api.settings.host + '/data/movies/' + id, data);
}

export async function getLikes(id) {
    return await api.get(api.settings.host + `/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function getLikeSpecUser(id) {
    const userId = sessionStorage.getItem('userId');
    return await api.get(api.settings.host + `/data/likes?wheremovieId%3D%22${id}%22%20and%20_ownerId%3D%22/${userId}/%22`);
}

export async function postLikes(data) {
    return await api.post(api.settings.host + '/data/likes', data);
}
// export async function getMyItems() {
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(api.settings.host + ``);
// }

// export async function searchItems(query) {
//     return await api.get(api.settings.host + ``);
// }



