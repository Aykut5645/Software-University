function foo(cityName, population, treasury) {
    let city = {
        name: cityName,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += percent / 100 * this.population;
        },
        applyRecession(percent) {
            this.treasury -= percent / 100 * this.treasury;
        },
    }

    return city;
}

const city = foo('Tortuga', 7000, 15000);

console.log(city);