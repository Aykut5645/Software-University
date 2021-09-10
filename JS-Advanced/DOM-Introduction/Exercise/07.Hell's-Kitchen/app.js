function solve() {
	let textAreaElement = document.querySelector('#inputs textarea');
	let buttonElement = document.querySelector('#btnSend');
	let bestRestElemenet = document.querySelector('#bestRestaurant').lastElementChild;
	let workersElement = document.querySelector('#workers').lastElementChild;

	buttonElement.addEventListener('click', () => {
		let arr = JSON.parse(textAreaElement.value);
		let list = {};

		arr.forEach(info => {
			let [restName, workersAsStr] = info.split(' - ');
			let workers = workersAsStr.split(', ').map(x => x.split(' '))

			if (list[restName]) {
				workers = list[restName]['workers'].concat(workers);
			}

			let average = workers.reduce((acc, x) => acc + Number(x[1]), 0) / workers.length;
			let bestSalary = workers.sort((a, b) => b[1] - a[1])[0][1];

			list[restName] = { workers, average, bestSalary };
		});

		let bestRest = Object.entries(list).sort((a, b) => b[1]['average'] - a[1]['average'])[0];

		bestRestElemenet.textContent =
			`Name: ${bestRest[0]} Average Salary: ${Number(bestRest[1]['average']).toFixed(2)} Best Salary: ${Number(bestRest[1]['bestSalary']).toFixed(2)}`;
		workersElement.textContent =
			bestRest[1]['workers'].sort((a, b) => b[1] - a[1]).map(worker => `Name: ${worker[0]} With Salary: ${worker[1]}`).join(' ');
	});
}