async function getInfo() {
    const busesElement = document.querySelector('#buses');
    const stopIdElement = document.querySelector('#stopId');
    const stopNameElement = document.querySelector('#stopName');

    const id = stopIdElement.value;

    try {
        const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + id);

        if (['1287', '1308', '1327', '2334'].includes(id) === true) {
            const [schedule, name] = Object.values(await response.json());

            stopNameElement.textContent = name;
            busesElement.innerHTML = Object.entries(schedule)
                .map(([arrive, minute]) => `<li>Bus ${arrive} arrives in ${minute}</li>`)
                .join('');

            stopIdElement.value = '';
        } else {
            throw new Error;
        }

    } catch (error) {
        stopName.textContent = 'Error';
        busesElement.innerHTML = '';
    }
}