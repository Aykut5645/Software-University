function solve() {
    const infoElement = document.querySelector('#info span');
    const [departBtn, arriveBtn] = document.querySelectorAll('input');

    let currentId = 'depot';

    async function depart() {
        const nextStop = await getNextStop(currentId);

        infoElement.textContent = `Next stop is ${nextStop.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        currentId = nextStop.next;
    }

    async function arrive() {
        const arrivingPlace = await getNextStop(currentId);

        infoElement.textContent = `Arriving at ${arrivingPlace.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        currentId = arrivingPlace.next;
    }

    async function getNextStop(id) {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + id);

            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            alert(error);
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();