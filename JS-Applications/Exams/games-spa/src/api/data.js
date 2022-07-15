import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllItems() {
    return await api.get(api.settings.host + '/data/games?sortBy=_createdOn%20desc');
}

export async function getItemDetails(id) {
    return await api.get(api.settings.host + '/data/games/' + id);
}

export async function createItem(data) {
    return await api.post(api.settings.host + '/data/games', data);
}

export async function deleteItem(id) {
    return await api.del(api.settings.host + '/data/games/' + id);
}

export async function updateItem(id, data) {
    return await api.put(api.settings.host + '/data/games/' + id, data);
}

export async function getHomeItems() {
    return await api.get(api.settings.host + '/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getAllComments(id) {
    return await api.get(api.settings.host + `/data/comments?where=gameId%3D%22${id}%22`);
}

export async function postComments(data) {
    return await api.post(api.settings.host + `/data/comments`, data);
}
// export async function getMyItems() {
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(api.settings.host + ``);
// }

// export async function searchItems(query) {
//     return await api.get(api.settings.host + ``);
// }