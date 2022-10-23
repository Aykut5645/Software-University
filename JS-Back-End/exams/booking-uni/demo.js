const obj = {
    name: 's',
    age: 'w',
    gender: 'f'
};

console.log(
    Object.values(obj).some(x => !x)
);