function main() {
    const token = sessionStorage.getItem('token');
    document.querySelector('button.load').addEventListener('click', getAllCatches);
    document.querySelector('button.add').addEventListener('click', addCatch);
    getAllCatches();
    document.getElementById('catches').addEventListener('click', handleClicks);
    document.getElementById('logoutBtn').addEventListener('click', logout);

    if (token) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        document.querySelector('button.add').disabled = false;
    }
}

main();

async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message)
    };

    const data = await response.json();
    return data;
}

async function getAllCatches(event) {
    const ownerId = sessionStorage.getItem('ownerId');
    const catches = await request('http://localhost:3030/data/catches');
    const catchesContainer = document.getElementById('catches');
    catchesContainer.innerHTML = '';
    catches.forEach(el => {
        const catchDiv = e('div', { className: 'catch', id: el._ownerId },
            e('input', {type: 'hidden', value: el._id}),
            e('label', {}, 'Angler'),
            e('input', { type: "text", className: "angler", value: el.angler }),
            e('hr'),
            e('label', {}, 'Weight'),
            e('input', { type: "number", className: "weight", value: el.weight }),
            e('hr'),
            e('label', {}, 'Species'),
            e('input', { type: "text", className: "species", value: el.species }),
            e('hr'),
            e('label', {}, 'Location'),
            e('input', { type: "text", className: "location", value: el.location }),
            e('hr'),
            e('label', {}, 'Bait'),
            e('input', { type: "text", className: "bait", value: el.bait }),
            e('hr'),
            e('label', {}, 'Capture Time'),
            e('input', { type: "number", className: "captureTime", value: el.captureTime }),
            e('hr'),
            e('button', { disabled: 'true', className: "update" }, 'Update'),
            e('button', { disabled: 'true', className: "delete" }, 'Delete')
        )
        if (catchDiv.id == ownerId) {
            catchDiv.querySelector('.delete').disabled = false;
            catchDiv.querySelector('.update').disabled = false;
        }
        catchesContainer.appendChild(catchDiv);
    });
}

async function addCatch(event) {
    event.preventDefault();
    const fieldset = document.getElementById('addForm');
    const angler = fieldset.querySelector('input[class="angler"]').value;
    const weight = fieldset.querySelector('input[class="weight"]').value;
    const species = fieldset.querySelector('input[class="species"]').value;
    const location = fieldset.querySelector('input[class="location"]').value;
    const bait = fieldset.querySelector('input[class="bait"]').value;
    const captureTime = fieldset.querySelector('input[class="captureTime"]').value;

    const body = { angler, weight, species, location, bait, captureTime };
    const token = sessionStorage.getItem('token');

    if (token != null) {
        await request('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': token
            },
            body: JSON.stringify(body)
        })
        getAllCatches();
    }
}

async function updateCatch(event) {
    event.preventDefault();
    const id = event.target.parentNode.querySelector('input[type="hidden"]').value;
    const angler = event.target.parentNode.querySelector('input[class="angler"]').value;
    const weight = event.target.parentNode.querySelector('input[class="weight"]').value;
    const species = event.target.parentNode.querySelector('input[class="species"]').value;
    const location = event.target.parentNode.querySelector('input[class="location"]').value;
    const bait = event.target.parentNode.querySelector('input[class="bait"]').value;
    const captureTime = event.target.parentNode.querySelector('input[class="captureTime"]').value;

    const body = { angler, weight, species, location, bait, captureTime };
    const token = sessionStorage.getItem('token');
    if (token != null) {
        await request('http://localhost:3030/data/catches/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': token
            },
            body: JSON.stringify(body)
        })
    }
}

async function deleteCatch(event) {
    event.preventDefault();
    const id = event.target.parentNode.querySelector('input[type="hidden"]').value;
    const token = sessionStorage.getItem('token');
    const confirmed = confirm('Do you want to delete this catch?');
    if (token != null && confirmed) {
        await request('http://localhost:3030/data/catches/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': token
            },
        })
        getAllCatches();
    }
}

function handleClicks(event) {
    if (event.target.className == 'update') {
        updateCatch(event);
    } else if (event.target.className == 'delete') {
        deleteCatch(event);
    }
}

function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('ownerId');
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementById('user').style.display = 'none';
    document.querySelector('button.add').disabled = true;
    getAllCatches();
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
