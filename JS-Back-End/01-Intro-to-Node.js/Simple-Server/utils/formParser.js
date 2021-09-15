function parse(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            let result;
            try {
                result = body
                    .split('&')
                    .map(p => p.split('='))
                    .reduce((acc, x) => Object.assign(acc, { [x[0]]: x[1] }), {})

                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    });
}

module.exports = parse;