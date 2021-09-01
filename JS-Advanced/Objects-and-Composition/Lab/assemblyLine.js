function foo() {
    return {
        hasClima: function (obj) {
            obj.temp = 21;
            obj.tempSettings = 21;

            obj.adjustTemp = function () {
                if (this.temp != this.tempSettings) {
                    return this.temp < this.tempSettings
                        ? this.temp += 1
                        : this.temp -= 1;
                }
            }
        },
        hasAudio: function (obj) {
            obj.currentTrack = null;

            obj.nowPlaying = function () {
                if (obj.currentTrack != null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function (obj) {
            obj.checkDistance = function (num) {

                const distances = {
                    [num < 0.1]: "Beep! Beep! Beep!",
                    [0.1 <= num && num < 0.25]: "Beep! Beep!",
                    [0.25 <= num && num < 0.5]: "Beep!",
                }

                console.log(
                    (Object
                        .entries(distances)
                        .find(x => x[0] === 'true') || ['true', ""])[1]
                );
            }
        }
    }
}

const assemblyLine = foo();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);

myCar.tempSettings = 18;
myCar.adjustTemp();

console.log(myCar.temp);
