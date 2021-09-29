class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, company) {
        if (!name || !salary || !position || !company || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[company]) {
            this.departments[company] = [];
        }

        this.departments[company].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestCompanyInfo = getBestCompany(this.departments);
        let average = getAverage(bestCompanyInfo[1]);

        function getBestCompany(arr) {
            return Object.entries(arr)
                .sort((a, b) => b[1]
                    .reduce((acc, x) => acc + x.salary, 0) / b[1].length - a[1].reduce((acc, x) => acc + x.salary, 0) / a[1].length)[0];
        }

        function getAverage(arr) {
            return arr.reduce((acc, x) => acc + x.salary, 0) / arr.length;
        }

        let result = bestCompanyInfo[1]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(employee => `${employee.name} ${employee.salary} ${employee.position}`)

        result.unshift(`Best Department is: ${bestCompanyInfo[0]}`, `Average salary: ${average.toFixed(2)}`, );

        return result.join('\n');
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());