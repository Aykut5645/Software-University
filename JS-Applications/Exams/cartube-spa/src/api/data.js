import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllListing() {
    return await api.get(api.settings.host + '/data/cars?sortBy=_createdOn%20desc');
}
export async function createCar(data) {
    return await api.post(api.settings.host + '/data/cars', data);
}
export async function getCarDetails(id) {
    return await api.get(api.settings.host + '/data/cars/' + id);
}
export async function deleteCar(id) {
    return await api.del(api.settings.host + '/data/cars/' + id);
}
export async function updateCar(id, data) {
    return await api.put(api.settings.host + '/data/cars/' + id, data);
}
export async function getMyCars() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(api.settings.host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
export async function search(query){
    return await api.get(api.settings.host + `/data/cars?where=year%3D${query}`);
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
    // return await api.get(api.settings.host + '/data/cars/' + id);
// }
// 
// export async function updateFurn(id, data) {
    // return await api.put(api.settings.host + '/data/catalog/' + id, data);
// }
// 
// export async function createFurn(data) {
    // return await api.post(api.settings.host + '/data/cars', data);
// }
// 
// export async function deleteMeme(id) {
    // return await api.del(api.settings.host + '/data/memes/' + id);
// }

