export const settings = {
    host: ''
};

async function requester(url, options) {
    const response = await fetch(url, options);

    try {
        if (response.ok === undefined) {
            const error = await response.json();
            throw new Error(error);
        }
        try {
            return await response.json();
        } catch (error) {
            return response;
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function getOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');

    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

export async function get(url) {
    return await requester(url, getOptions());
}
export async function post(url, data) {
    return await requester(url, getOptions('post', data));
}
export async function put(url, data) {
    return await requester(url, getOptions('put', data));
}
export async function del(url) {
    return await requester(url, getOptions('delete'));
}

export async function login(email, password) {
    const result = await post(settings.host + '/users/login', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('userGender', result.gender);

    return result;
}

export async function register(username, email, password, gender) {
    const result = await post(settings.host + '/users/register', { username, email, password, gender });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('userGender', result.gender);

    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userGender');

    return result;
}