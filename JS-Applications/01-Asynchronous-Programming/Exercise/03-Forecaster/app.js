const html = {
    submitBtnElement: () => document.getElementById('submit'),
    locationInputElement: () => document.getElementById('location')
};

function main() {
    html.submitBtnElement().addEventListener('click', eventHandlerBtn);
}

main();

async function eventHandlerBtn() {
    const data = await getData();

    getCode(
        data,
        html.locationInputElement().value
    );
}

function getCode(data, value) {
    return data.find(d => d.name === value).code;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        result[attr] = value;
    }

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });
}

async function getData(id = '') {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations/' + id);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();

    } catch (error) {
        return alert(error);
    }
}