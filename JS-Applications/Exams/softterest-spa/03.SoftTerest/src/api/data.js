import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllItems() {
    return await api.get(api.settings.host + '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getItemDetails(id) {
    return await api.get(api.settings.host + '/data/ideas/' + id);
}

export async function createItem(data) {
    return await api.post(api.settings.host + '/data/ideas', data);
}

export async function deleteItem(id) {
    return await api.del(api.settings.host + '/data/ideas/' + id);
}

export async function updateItem(id, data) {
    return await api.put(api.settings.host + '' + id, data);
}

// export async function getMyItems() {
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(api.settings.host + ``);
// }

// export async function searchItems(query) {
//     return await api.get(api.settings.host + ``);
// }