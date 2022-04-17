const jwt = require('jsonwebtoken');

const payload = { message: 'Hello World!' };
const secret = 'my-secret-key';
const options = { expiresIn: '2d' };

const token = jwt.sign(payload, secret, options);

console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQhIiwiaWF0IjoxNjQ5OTM2MDkwLCJleHAiOjE2NTAxMDg4OTB9.r5Famn56YQhYsoKbY0lMZlObG8OfW0uIXEJBzYaHMrk
console.log(jwt.decode(token)); // { message: 'Hello World!', iat: 1649936255, exp: 1650109055 }
console.log(jwt.verify(token, secret)); // { message: 'Hello World!', iat: 1649936255, exp: 1650109055 }