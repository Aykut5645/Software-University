function foo(obj) {
    function getVolume(power) {
        if (power <= 90) {
            return [90, 1800];
        } else if (power <= 120) {
            return [120, 2400];
        } else {
            return [200, 3500]
        }
    }

    function getWheels(wheelsize) {
        wheelsize % 2 == 0 ? wheelsize-- : wheelsize;

        return [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    return finalObj = {
        model: obj.model,
        engine: {
            power: getVolume(obj.power)[0],
            volume: getVolume(obj.power)[1],
        },
        carriage: {
            type: obj.carriage,
            color: obj.color,
        },
        wheels: getWheels(obj.wheelsize),
    };
}

console.log(
    foo(
        {
            model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14
        }
    )
)