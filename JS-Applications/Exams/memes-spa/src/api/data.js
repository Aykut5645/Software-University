import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllMemes() {
    return await api.get(api.settings.host + '/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(data) {
    return await api.post(api.settings.host + '/data/memes', data);
}

export async function getMemeDetails(id) {
    return await api.get(api.settings.host + '/data/memes/' + id);
}

export async function updateMeme(id, data) {
    return await api.put(api.settings.host + '/data/memes/' + id, data);
}

export async function deleteMeme(id) {
    return await api.del(api.settings.host + '/data/memes/' + id);
}

export async function getMyProfile() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(api.settings.host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// implement application specific requests
// export async function getAllFurn() {
    // return await api.get(api.settings.host + '/data/catalog');
// }
// 
// export async function getMyFurn() {
    // const userId = sessionStorage.getItem('userId');
    // return await api.get(api.settings.host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
// }
// 
// export async function getFurnDetails(id) {
    // return await api.get(api.settings.host + '/data/catalog/' + id);
// }
// 
// export async function updateFurn(id, data) {
    // return await api.put(api.settings.host + '/data/catalog/' + id, data);
// }
// 
// export async function createFurn(data) {
    // return await api.post(api.settings.host + '/data/catalog', data);
// }
// 
// export async function deleteMeme(id) {
    // return await api.del(api.settings.host + '/data/memes/' + id);
// }

