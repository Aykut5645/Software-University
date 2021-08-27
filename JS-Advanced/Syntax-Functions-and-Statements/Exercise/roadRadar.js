function foo(speed, roadType) {
    //speed = Number(speed);
    let speedLimits = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    };

    if (speedLimits[roadType] < speed) {
        return speed - speedLimits[roadType] <= 20
            ? `The speed is ${speed - speedLimits[roadType]} km/h faster than the allowed speed of ${speedLimits[roadType]} - speeding`
            : speed - speedLimits[roadType] <= 40
                ? `The speed is ${speed - speedLimits[roadType]} km/h faster than the allowed speed of ${speedLimits[roadType]} - excessive speeding`
                : `The speed is ${speed - speedLimits[roadType]} km/h faster than the allowed speed of ${speedLimits[roadType]} - reckless driving`;
    } else {
        return `Driving ${speed} km/h in a ${speedLimits[roadType]} zone`;
    }
}

console.log(
    foo(40, 'city')
);