function requestValidator(input) {

    if (!input.hasOwnProperty('method') || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(input.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!input.hasOwnProperty('uri') || !/^([0-9A-Za-z\.]+|\*)$/.test(input.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!input.hasOwnProperty('version') || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(input.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!input.hasOwnProperty('message') || !/^[^<>&\\'"]*$/.test(input.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return input;
}

requestValidator
    (
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '',
        }
    );