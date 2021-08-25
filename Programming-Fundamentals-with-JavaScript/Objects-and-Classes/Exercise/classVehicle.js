class Vehicle {
    constructor(type, model, parts = {}, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: 0,
            power: 0,
            quality: parts.engine * parts.power,
        };
        this.fuel = fuel;
        this.drive = loss => this.fuel -= loss;
    }
}